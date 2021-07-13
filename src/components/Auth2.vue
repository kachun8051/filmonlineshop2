<template>
  <div class="auth">
    <button v-show="!login" @click="isshown=true" style="width:auto;">Login</button>     
    <div v-show="isshown" id="id01" class="modal form">  
      <div class="modal-content animate">
        <div class="imgcontainer">
          <span @click="isshown=false" class="close" title="Close Modal">&times;</span>
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">
        </div>
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input v-model="username" placeholder="Enter Username" type="text" name="uname" required>
          <label for="psw"><b>Password</b></label> 
          <input v-model="password" placeholder="Enter Password" type="password" name="psw" required>      
          <button @click="checklogin">Login</button>
          <p id='warningmsg'>{{ message }}</p>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>
        <div class="container" style="background-color:#f1f1f1">
          <button type="button" @click="isshown=false" class="cancelbtn">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </div>
    </div>
    <div v-show="login">
      <label>Welcome </label> {{ role }} <br/>
      <button @click="logout" style="width:auto;">Logout</button>
    </div>
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
        username: '',
        password: '',
        message: '',
        login: false,                
        role: '',
        isshown: false
      }
    },
    methods: {
      checklogin() {
        //check if username password have value
        if(this.username.length == 0 || this.password.length == 0) {
          this.message = "Please provide neccessary information"
          return
        }
        const jsonBody = JSON.stringify({
          'user': this.username,
          'pwd': this.password
        })

        let url_1 = 'http://47.242.250.90:18888/auth'
        fetch(url_1, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json'
          },
          body: jsonBody
        })
        .then( (res, err) => { 
          if (err) {
            throw 'communication error'
          }
          if (res.status == 200) {
            return res.json()
          } else {
              throw 'Login Failed'
          }
        })
        .then( json => {
          this.login = true
            if (json.role == 1) {
              this.role = 'staff'
            } else {
              this.role = 'customer'
            }
            this.username = ''
            this.password = ''
            this.isshown = false
            localStorage.setItem('name', JSON.stringify(json))
        })
        .catch( err => {
            if (err) {
              this.login = false
              this.message = err
            }
          })
        },
        logout() {
          localStorage.clear()                
            this.login = false
        }
      }
  }
</script>

<style scoped>

  .form {
    border: 3px solid #f1f1f1;
  }

  body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 15%;
  border-radius: 20%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 5% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>  