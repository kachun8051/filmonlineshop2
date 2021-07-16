<template>
    <div id="content"> 
        <router-view />
    </div>
</template>

<style scoped>
    /* Style the content */
    #content {
        overflow:auto; 
        position:absolute; 
        z-index:3; 
        top:100px; 
        bottom:50px; 
        left:200px; 
        right:0; 
        background:#eee;
        /*font-size: 50px;*/
    }
</style>