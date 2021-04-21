<template>
  <div id="login">
    <div class="container">
      <br>
    <h1 class="text-center text-white pt-5">Welcome to E-commerce CMS</h1>
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
          <div id="login-box" class="col-md-12">
            <form id="login-form" class="form" action="#" method="post">
              <h3 class="text-center text-info">Enter your Admin credentials</h3>
              <div class="form-group">
                <label for="email" class="text-info">E-Mail:</label><br>
                <input type="text" name="email" id="email" class="form-control" v-model="loginData.email">
              </div>
              <div class="form-group">
                <label for="password" class="text-info">Password:</label><br>
                <input type="password" name="password" id="password" class="form-control" v-model="loginData.password">
              </div>
              <div class="form-group">
                <button type="submit" name="submit" class="btn btn-info btn-md" @click.prevent="login()">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  data () {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('loginbtn', {
        email: this.loginData.email,
        password: this.loginData.password
      }).then(() => {
        this.loginData.email = ''
        this.loginData.password = ''
      })
    }
  }
}
</script>

<style scoped>
#login {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 11.5vh;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}

</style>