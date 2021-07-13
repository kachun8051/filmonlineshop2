<template>
    
        <div class="header">
            <div class="headersection">This is a header...</div>
            <Auth2 class="authbutton" />
        </div>
        
    
</template>

<script>
import Auth2 from './Auth2.vue'

export default {
  name: 'Header',
  components: {
    Auth2, 
  }
}
</script>

<style scoped>
    .header {
        background-color: #666;
        padding: 30px;
        position: relative;
        height: 10%;
        left: 0;
        top: 0;
    }
    .headersection {        
        text-align: center;
        font-size: 20px;
        color: white;
    }
    .authbutton {
        margin-top: 1px;
        margin-right: 5px;
        position:absolute;
        top:0;
        right:5px;
    }
</style>