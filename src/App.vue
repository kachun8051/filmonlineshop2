<template>
  <Head />
  <Foot />
  <LeftMenu />
  <Content />  
</template>

<script>

import Head from './components/Head.vue'
import Foot from './components/Foot.vue'
import LeftMenu from './components/LeftMenu.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Head, Foot, LeftMenu, Content, 
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.authbutton {
        margin-top: 1px;
        margin-right: 5px;
        position:absolute;
        top:0;
        right:5px;
    }
</style>
