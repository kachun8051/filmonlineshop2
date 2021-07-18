<template>
    <div v-if="login" class="staffinfo">
        <h2>Staff Change password page</h2> 
        <div class="loginrow">   
        <label>New password: </label><input v-model="password1" @input="pswvalidate" placeholder="new password" type="password">
        </div>
        <p>{{password1}}</p>
        <div class="loginrow">
        <label>New password Again: </label><input v-model="password2" @input="pswvalidate" placeholder="new password" type="password">
        </div>
        <p>{{password2}}</p>
        <button @click="save">Save</button>
        <br/>        
        <p id='msg' v-bind:class='classObject'>{{ message }}</p>
    </div>
</template>

<script>
  export default {
    beforeMount() {        
      if (localStorage.getItem('name')) {
        this.login = true
      }
    },      
    data() {
      return {        
        login: false,                
        role: '',
        authkey: '',
        isshown: false,
        message: '',
        password1: '',
        password2: '',
        isvalid: false,
      }
    },
    computed: {
      classObject: function() {
        if (this.isvalid == false) {
          return 'warning'
        } else {
          return 'message'
        }
      }
    },
    methods: {
      pswvalidate() {
        if (this.password1 !== this.password2) {
          this.message = '2 passwords must be same!'
          console.log('not equal')
          this.isvalid = false
          return
        }
        if (this.password1.length < 8) {
          this.message = "password at least 8 characters"
          this.isvalid = false
          return 
        }
        this.message = ''
        console.log('valid')
        this.isvalid = true        
      },
      save() {
        if (this.isvalid == false) {          
          return
        }        
        if (localStorage.getItem('name') === null) {
          this.message = 'Please Login first!'
          return
        }
        let objAuth = JSON.parse(localStorage.getItem('name'))
        let authkey = objAuth.s
        console.log('authkey (StaffInfo): ' + authkey)
        let posturl = 'http://47.242.250.90:18888/update'         
         let postdata = JSON.stringify({
             'key': authkey, 
             'newpwd': this.password1
         })
         console.log('posting data (StaffInfo): ' + JSON.stringify(postdata))
         let postreq = {method: 'PUT', mode: 'cors', headers: {'Content-type': 'application/json'}, body: postdata}         
         fetch(posturl, postreq)
         .then( (res, err) => {
            if (err) {
                console.log('error' + err)
                throw 'communication error'
            }
            if (res.status == 201) {
                console.log('password update done')
                //console.log(res.json())
                return res.json()
            } 
            else {
                throw 'Post Failed!'
            }
         })
         .then( (json) => {
             console.log('response after post: ' + JSON.stringify(json))
             this.password1 = ""
             this.password2 = ""
             this.message = "Password is successfully updated."
             this.isvalid = true
         })
         .catch( (err) => {
             if (err) {
                 this.myError = err
             }
         })
      }
    }
  }
</script>

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
  .message {
    color: blue;
  }
  .loginbox {
    float: left;
  }
  .header {
    overflow: hidden;
    background-color: #e9e9e9;
  }
</style>