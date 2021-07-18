<template>
  <div class="home">    
      <div class="columnLeft">
        <h2>Providing up-to-date films online</h2>

        <img alt="Film Anywhere" src='../assets/onlinefilmshop.jpg' />
      </div>
      <div class="columnRight">
        <CurrentWeather />
      </div>
    </div>  
</template>

<script>
import CurrentWeather from '../components/CurrentWeather.vue'
export default {
  name: "Home",
  components: {
    CurrentWeather,
  },
};
</script>

<style scoped>
    .home {
        display: flex;
        height: 100%;
        width: 100%;
    }
    /* Create two columns that sits next to each other */
    .columnLeft {
        flex: 70%;
        padding: 10px;
        background-color:#aaa;
        height: auto;
        /* height: 300px; */ /* Should be removed. Only for demonstration */
    }
    .columnRight {
        flex: 30%;
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
</style>