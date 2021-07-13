<template>
    <div>
        <h1>Film Available</h1>
        <p>Your selected: {{ selectedidx }} </p>
        <ul v-if="!loading">
            <li v-for="film in data" :key="film._id">
                <div v-on:click="showDetail(film._id)">
                    <img v-bind:src="film.poster" />
                    <p>{{ film.title }}</p>
                </div>
            </li>
        </ul>
    </div>    
</template>
<script>    
    export default {
        name: 'FilmList',
        data() {
            return {
                selectedidx: -1,
                data: [],
                loading: false
            }
        }, 
        beforeMount() {
            this.fetchFilm()
        },
        methods: { 
            async fetchFilm() { 
                const mylink = 'http://47.242.250.90:18888/list'
                const res = await fetch(mylink) 
                const data = await res.json()
                this.data = data
            },
            showDetail(id) {
                this.selectedidx = id
                this.$router.push({name: 'FilmListDetail', params: {idx: id}})
            }            
        }
    }
</script>