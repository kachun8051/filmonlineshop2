<template>
    <div id="nav" class="nav">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/filmlist">Firm List</router-link></li>
            <li><router-link to="/myfavorite">My Favorite</router-link></li>
            <li><router-link to="/staffinfo">Staff Info</router-link></li>
            <li><router-link to="/auth">Auth</router-link></li>
        </ul>
  </div>
</template>

<style scoped>
    /* Style the navigation menu */
    .nav {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background: #ccc;
        padding: 20px;
    }
    /* Style the list inside the menu */
    .nav ul {
        list-style-type: none;
        padding: 0;
    }
</style>