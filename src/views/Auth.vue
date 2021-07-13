<template>
    <div class="auth">
        <h2>Login / Logout page</h2>
        <div v-if="!login">
            <div class="loginrow">
            <label>Username: </label><input v-model="username" placeholder="user name" type="text">
            </div>
            <div class="loginrow">
            <label>Password: </label><input v-model="password" placeholder="password" type="password">
            </div>
            <button @click="checklogin">Login</button>
            <br/>
            <p id='warningmsg' class='warning'>{{ message }}</p>
        </div>
        <div v-if="login">
            <p><label>Welcome </label> {{ role }} </p>
            <button @click="logout">Logout</button>
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
                role: ''
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
  .loginrow {
    display: flex;
    justify-content: space-between;
    width: 30%;
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