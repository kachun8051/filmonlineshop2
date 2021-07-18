<template>    
    <div id="head">            
        <h1>Film Online Shop</h1>
    </div>
</template>

<script>
//import Auth2 from './Auth2.vue'

export default {
  name: 'Head',
  components: {
     
  }
}
</script>

<style scoped>
    #head {
        position:absolute; 
        margin:0; 
        top:0; 
        left:0; 
        display:block; 
        width:100%; 
        height:100px; 
        background:url('../assets/filmheader2.jpg') #000;
        background-position:0 0; 
        background-repeat:no-repeat; 
        font-size:1.8em; 
        z-index:5; 
        overflow:hidden; 
        color:#00F;
        
    }
    h1 {
        margin-right: 5px;
        display: block;
        margin-top: 5px;
        text-align: right;
    }

    
</style>