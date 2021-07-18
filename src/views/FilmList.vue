<template>
    <div>
        <h1>Film Available</h1>
        <p>Your selected: {{selectedidx}} </p>        
        <div id="paginate" v-if="!loading">
            <nav>
                <ul class="pagination">
                    <li v-for="index in numofpage" :key="index">
                        <a :id="'page'+index" href="#" v-on:click="paging(index)">{{index}}</a>
                    </li>
                </ul>
            </nav>            
        </div>
        <div v-if="!loading">
            <div class='gallery' v-for="film in dataforshown" :key="film._id">
                <img v-bind:src="film.poster" v-on:click="showDetail(film._id)" />
                <p>{{ film.title }}</p>
            </div>
        </div>
        <p v-if="loading">Data is fetching...</p>
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
    .isactive {
        background-color: #4CAF50;
        color: white;
    }
    .isinactive {
        background-color: transparent;
        color: white;
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
            this.fetchFilm().then( () => {
                this.numofpage = Math.ceil(this.data.length / 5)
                // get back the filmlist page's clicked page index
                let pageindexclicked = localStorage.getItem('pageindex')
                if (pageindexclicked == undefined || pageindexclicked == -1) {
                    this.dataforshown = this.data.slice(0, 5)
                    this.selectedidx = 1
                    this.loading = false                    
                    this.delayOne()
                } 
                else {
                    this.selectedidx = pageindexclicked
                    let startidx = (this.selectedidx-1) * 5
                    this.dataforshown = this.data.slice(startidx, startidx + 5)
                    this.loading = false
                    let currelem = 'page' + pageindexclicked
                        
                    localStorage.setItem('pageindex', pageindexclicked)
                    this.delayOther(currelem)
                }
                                
            })
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
                    console.log('fetched')
                }                
            },
            showDetail(id) {
                this.$router.push({name: 'FilmListDetail', params: {idx: id}})
            },
            paging(idx) {
                this.loading = true
                let startidx = (idx-1) * 5
                this.dataforshown = this.data.slice(startidx, startidx + 5)
                //record the previous page index for deactive it
                let previdx = this.selectedidx
                this.selectedidx = idx      
                //clear the previous page's tab
                let prevelem = 'page' + previdx
                if (previdx != -1 && document.getElementById(prevelem) != undefined ) {
                    document.getElementById(prevelem).className = 'isinactive'
                } else {
                    console.log(`document.getElementById('${prevelem}') is undefined`)
                }
                //set the current page's tab
                let currelem = 'page' + idx
                if (idx != -1 && document.getElementById(currelem) != undefined ) {
                    document.getElementById(currelem).className = 'isactive'
                } else {
                    console.log(`document.getElementById('${currelem}') is undefined`)
                }    
                localStorage.setItem('pageindex', idx)                   
                this.loading = false                
                console.log('idx: ' + idx)
            },
            delayOne() {
                setTimeout(function(){ 
                    //set the current page's tab i.e. 1 when first fetched
                    if (document.getElementById('page1') != undefined ) {
                        document.getElementById('page1').className = 'isactive'                    
                    } else {
                        console.log('page1 is undefined')
                    } 
                }, 100);
            },
            delayOther(elem) {
                setTimeout(function(){ 
                    if (document.getElementById(elem) != undefined ) {
                        document.getElementById(elem).className = 'isactive'
                    } else {
                        console.log(`document.getElementById('${elem}') is undefined`)
                    } 
                }, 100);
            }            
        }
    }
</script>