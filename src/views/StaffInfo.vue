<template>
    <div class="staffinfo">
        <h2>Staff Information page</h2> 
        <div class="loginrow">   
        <label>Username: </label><input v-model="username" placeholder="user name" type="text">
        </div>
        <div class="loginrow">
        <label>Password: </label><input v-model="password" placeholder="password" type="password">
        </div>
        <div class="loginrow">
        <label>Email: </label><input v-model="email" placeholder="email" type="text">
        </div>
        <button @click="save">Save</button>
        <br/>
        <p id='warningmsg'>{{ message }}</p>        
    </div>
</template>

<style scoped>
  .loginrow {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: .5rem;
  }
  .warning {
    color: red;
  }
  .loginbox {
    float: left;
  }
  .header {
    overflow: hidden;
    background-color: #e9e9e9;
  }
</style>