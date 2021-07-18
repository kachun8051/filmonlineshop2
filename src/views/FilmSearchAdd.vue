<template>
  <div style='display: flex; height: 100%; width: 100%;'>     
     <div style='flex: 55%; padding: 10px; background-color:#aaa; height: auto;'>
       
        <p>
          <input placeholder="Filter by Name" v-model="m_input">&nbsp;&nbsp;
          <button id="searchbutton" v-on:click="fetchFilm(m_input)">Search</button>
        </p>
        <div v-if="filmisfound">
          <hr/>
          <h1>{{ this.film.title }}</h1>
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
          <button style="margin-top: 10px;" id="add" @click="addthisfilm()">Add this film</button>
          <p style="color: red;"> {{ this.myError }} </p>
          <p style="color: blue;">{{ this.myMsg }}</p>
        </div>
     </div>
     <div style='flex: 45%; padding: 10px; background-color:#bbb; height: auto;'>      
      <img style="margin-left: auto; margin-right: auto; margin-top: 10%; display: block;" v-if="filmisfound" v-bind:src="this.film.poster" />
     </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        minput: '',
        film: {},
        filmisfound: false,
        mylink: '',
        myError: '',
        myResp: '',
        myMsg: '',
      }
    },
    methods: {
      async fetchFilm(minput) {
        const link = `http://47.242.250.90:18888/infofilm/${minput}` 
        this.mylink = link
        console.log('query link1: ' + link)       
        const res = await fetch(link)        
        const data_1 = await res.json()  
        this.film = data_1 
        this.filmisfound = true              
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
          this.filmisfound = true
        })
        .catch( (error) => {
          this.myError = error
          this.filmisfound = false
        })
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
         /*
         if (!(typeof this.film.runtime === 'number' && this.film.runtime%1 == 0)) {
           this.myError = "Runtime (" + this.film.runtime + ") must be an integer!"
           return
         }
         */
         let intRuntime = 0
         try {
           intRuntime = parseInt(this.film.runtime)
         } catch (ex) {
           this.myError = ex
           return
         }
         let objAuth = JSON.parse(localStorage.getItem('name'))
         let authkey = objAuth.s
         console.log('authkey (FilmSearchAdd): ' + authkey)
         let posturl = 'http://47.242.250.90:18888/imfilm'         
         let postdata = JSON.stringify({
             's': authkey, 
             'film': {
                'title': this.film.title, 
                'year': this.film.year,
                'released': this.film.released,
                'runtime': intRuntime,
                'language': this.film.language,
                'genre': this.film.genre,
                'director': this.film.director,
                'poster': this.film.poster
             }
         })
         console.log('posting data (FilmSearchAdd): ' + JSON.stringify(postdata))
         let postreq = {method: 'POST', mode: 'cors', headers: {'Content-type': 'application/json'}, body: postdata}         
         fetch(posturl, postreq)
         .then( (res, err) => {
            if (err) {
                console.log('error' + err)
                throw 'communication error'
            }
            if (res.status == 201) {
                console.log('film add done')
                //console.log(res.json())
                return res.json()
            } 
            else {
                throw 'Post Failed!'
            }
         })
         .then( (json) => {
             console.log('response after post: ' + JSON.stringify(json))
             this.myMsg = "Add this film successfully."
             this.film = {}
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