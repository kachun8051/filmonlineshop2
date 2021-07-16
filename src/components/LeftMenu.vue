<template>    
    <div id="left">
        <dl>
            <dt><router-link class="nav" to="/">Home</router-link></dt>
            <dd>Home page</dd>
            <dt><router-link class="nav" to="/about">About</router-link></dt>
            <dd>About page</dd>
            <dt><router-link class="nav" to="/filmlist">Film List</router-link></dt>
            <dd>Film list for display</dd>
            <dt><router-link class="nav" to="/filmsearchadd">Film Add</router-link></dt>
            <dd>Film is searched and Add to list</dd>
            <dt><router-link class="nav" to="/staffinfo">Staff Info</router-link></dt>
            <dd>Staff can edit information here</dd>            
        </dl>
        <Auth2 class="nav2" />
    </div>
</template>

<script>
import Auth2 from './Auth2.vue'

export default {
  name: 'LeftMenu',
  components: {
      Auth2,
  }
}
</script>

<style scoped>
    #left {
        position:absolute; 
        left:0; 
        top:100px; 
        bottom:50px; 
        width:200px; 
        background:url('../assets/filmleft2.jpg') rgb(76,76,76); 
        font-size:1.2em; 
        z-index:4; 
        overflow:auto; 
        background-repeat:no-repeat;
    }

    dd {
        display:none;
    }

    .nav2 {
        margin-left:50px; 
        display:block; 
        width:100px; 
        height:25px; 
    }

    a.nav, a.nav:visited {
        margin-left:50px; 
        display:block; 
        width:100px; 
        height:25px; 
        background:#aaa; 
        color:#eee; 
        border:1px solid #000; 
        text-decoration:none; 
        text-align:center; 
        line-height:25px;
    }
  
    a.nav:hover {
        background:#000; color:#fff;
    }
</style>