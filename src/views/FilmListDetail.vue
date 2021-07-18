<template>
    <div class="row" v-if="!loading">
        <div class="columnLeft">
            <img v-bind:src="film.poster" />
        </div>
        <div class="columnRight">
            <h1>{{ film.title }}</h1>
            <ul>
                <li>Year: {{ film.year }}</li>
                <li>Released: {{ film.released }}</li>
                <li>Runtime: {{film.runtime}}</li>
                <li>Language: {{film.language}}</li>
                <li>Genre: {{film.genre}}</li>
                <li>Director: {{film.director}}</li>                
            </ul>
            <button @click="back()">Back</button>
        </div>        
    </div>
</template>
<style scoped>
    .row {
        display: flex;
        height: 100%;
        width: 100%;
    }
    /* Create two columns that sits next to each other */
    .columnLeft {
        flex: 30%;
        padding: 10px;
        background-color:#aaa;
        height: auto;
        /* height: 300px; */ /* Should be removed. Only for demonstration */
    }
    .columnRight {
        flex: 70%;
        padding: 10px;
        background-color:#bbb;
        height: auto;
    }
    img {
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
        display: block;
    }
    li {
        font-size: 1.5em;
    }
</style>
<script>
    export default {
        name: 'FilmDetail',
        data() {
            return {
                idx: '',
                film: {},
                loading: false
            }
        },
        beforeMount(){
            this.fetchFilm(this.$route.params.idx)
        },
        methods: { 
            async fetchFilm(idx) {
                const mylink = `http://47.242.250.90:18888/film/${idx}`
                const res = await fetch(mylink)
                const data = await res.json();
                this.film = data[0]
            },
            back() { 
                return this.$router.go(-1)
            }
        },        
    }
</script>