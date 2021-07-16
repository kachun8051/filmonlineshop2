<template>
  <div>
    <p><input placeholder="Filter by Name" v-model="m_input"></p>
    <button id="searchbutton" @click="fetchFilm(m_input)">Search</button>
  </div>
  <div>
    <h1>{{ this.film.title }}</h1>     
    <p id="link">Query Link: {{ mylink }} </p>  
    <p id="err">Error Message: {{ myError }} </p>   
    <p id="response">Response: {{ myResp }} </p>
    <label for="year"><b>Year</b></label><br/> 
    <input style="width: 50%" v-model="this.film.year" placeholder="Year" type="text" name="year"><br/>
    <label for="released"><b>Released</b></label><br/> 
    <input style="width: 50%" v-model="this.film.released" placeholder="Released" type="text" name="released"><br/>
    <label for="runtime"><b>Runtime</b></label><br/> 
    <input style="width: 50%" v-model="this.film.runtime" placeholder="Runtime" type="text" name="runtime"><br/>
    <label for="language"><b>Language</b></label><br/> 
    <input style="width: 50%" v-model="this.film.language" placeholder="Language" type="text" name="language"><br/>
    <label for="genre"><b>Genre</b></label><br/> 
    <input style="width: 50%" v-model="this.film.genre" placeholder="Genre" type="text" name="genre"><br/>
    <label for="director"><b>Director</b></label><br/> 
    <input style="width: 50%" v-model="this.film.director" placeholder="Director" type="text" name="director"><br/>
    <img v-bind:src="this.film.poster" />
    <button id="add" @click="addthisfilm()">Add this film</button>
    <button id="back" @click="back()">Back</button>
  </div>
</template> 

<script>
  export default {
    data() {
      return {
        m_input: '',
        film: {},
        loading: false,
        mylink: '',
        myError: '',
        myResp: '',
      }
    },
    methods: {
      async fetchFilm(minput) {
        const link = `http://47.242.250.90:18888/infofilm/${minput}` 
        this.mylink = link
        console.log('query link1: ' + link)       
        const res = await fetch(link)        
        try {
          const data_1 = await res.json()  
          this.film = data_1;        
        } catch (err) {
          this.myError = err.Message
        }        
      },
      fetchFilmByPromise(minput){
        const link = `http://47.242.250.90:18888/infofilm/${minput}` 
        this.mylink = link
        console.log('query link2: ' + link)
        fetch(link)
        .then((resp) => {
          return resp.json()
        })
        .then((json_1) => {
          this.film = json_1
        })
        .catch( (error) => 
          this.myError = error
        )
      },
      addthisfilm(){
         if (localStorage.getItem('name') === null) {
             this.myError = 'Please Login first!'
             return
         }
         if (this.film.year.length == 0 || this.film.released.length == 0 || this.film.runtime.length == 0 || this.film.language.length == 0 || this.film.genre.length == 0 || this.film.director.length == 0 ) {
             this.myError = 'Please provide neccessary information!'
             return
         }
         
         let objAuth = JSON.parse(localStorage.getItem('name'))
         let authkey = objAuth.s
         console.log('authkey: ' + authkey)
         let posturl = 'http://47.242.250.90:18888/imfilm'         
         let postdata = JSON.stringify({
             's': authkey, 
             'film': {
                'title': this.film.title, 
                'year': this.film.year,
                'released': this.film.released,
                'runtime': this.film.runtime,
                'language': this.film.language,
                'genre': this.film.genre,
                'director': this.film.director,
                'poster': this.film.poster
             }
         })
         console.log('posting data: ' + JSON.stringify(postdata))
         let postreq = {method: 'POST', mode: 'cors', headers: {'Content-type': 'application/json'}, body: postdata}         
         fetch(posturl, postreq)
         .then( (res, err) => {
            if (err) {
                console.log('error' + err)
                throw 'communication error'
            }
            if (res.status == 201) {
                console.log('done')
                //console.log(res.json())
                return res.json()
            } 
            else {
                throw 'Post Failed!'
            }
         })
         .then( (json) => {
             console.log('response after post: ' + JSON.stringify(json))
         })
         .catch( (err) => {
             if (err) {
                 this.myError = err
             }
         })         
      }
    }
  }
</script>