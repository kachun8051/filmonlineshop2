<template>
    <div v-if="!loading">
        <h1>{{ film.title }}</h1>
        <img v-bind:src="film.poster" />
        <p>{{ film.released }}<br/>{{ film.year }}</p>
        <button @click="back()">Back</button>
    </div>
</template>
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