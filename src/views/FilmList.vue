<template>
    <div>
        <h1>Film Available</h1>
        <p>Your selected: {{ selectedidx }} </p>        
        <div id="paginate">
            <nav>
                <ul class="pagination">
                    <li v-for="index in numofpage" :key="index"><a href="#" v-on:click="paging(index)">{{index}}</a></li>
                </ul>
            </nav>
        </div>
        <div v-if="!loading">
            <div class='gallery' v-for="film in dataforshown" :key="film._id">
                <img v-bind:src="film.poster" v-on:click="showDetail(film._id)" />
                <p>{{ film.title }}</p>
            </div>
        </div>
    </div>    
</template>
<style scoped>
    .gallery {
      margin: 5px;
      border: 1px solid #ccc;
      float: left;
      width:250px;
      height:388px;
    }

    .gallery:hover {
        border: 1px solid #777;
    }

    .gallery img {
        max-height:80%;
        max-width:100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .gallery-container {
        margin: 0 auto;
        text-align:center;
        padding-left:65px;
    }

    ul.pagination {
        display: inline-block;
        padding: 0;
        margin: 0;
    }

    ul.pagination li {display: inline;}
    
    ul.pagination li a, ul.pagination li div {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
    }
</style>
<script>    
    export default {
        name: 'FilmList',
        data() {
            return {
                selectedidx: -1,
                data: [],
                dataforshown: [],
                loading: false,
                numofpage: 0
            }
        }, 
        beforeMount() {
            this.fetchFilm()
            console.log('beforemount')
        },
        methods: { 
            async fetchFilm() { 
                this.loading = true
                const mylink = 'http://47.242.250.90:18888/list'
                const res = await fetch(mylink) 
                const data = await res.json()
                if (Array.isArray(data)) {
                    this.data = data
                    this.dataforshown = data.slice(0, 5)
                    this.numofpage = Math.ceil(this.data.length / 5)
                    this.loading = false
                    console.log('fetched')
                }                
            },
            showDetail(id) {
                this.selectedidx = id
                this.$router.push({name: 'FilmListDetail', params: {idx: id}})
            },
            paging(idx) {
                this.loading = true
                let startidx = (idx-1) * 5
                this.dataforshown = this.data.slice(startidx, startidx + 5)
                //window.location.reload                
                this.loading = false
                console.log('idx: ' + idx)
            }            
        }
    }
</script>