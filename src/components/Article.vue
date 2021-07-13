<template>
    <div class="article"> 
        <router-view />
    </div>
</template>

<style scoped>
    /* Style the content */
    .article {
        -webkit-flex: 3;
        -ms-flex: 3;
        flex: 3;
        background-color: #f1f1f1;
        padding: 10px; 
    }
</style>