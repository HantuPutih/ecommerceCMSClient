<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" v-if="isLoggedIn" fixed="top" >
        <b-navbar-brand>E-Commerce CMS</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/ProductList" >Product List</router-link>
            <router-link class="nav-link" to="/AddProduct">Add Product</router-link>
            <!-- banner -->
            <router-link class="nav-link" to="/BannerList">Banner List</router-link>
            <router-link class="nav-link" to="/AddBanner">Add Banner</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" @click.prevent="logoutbtn()">Logout</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable eol-last */

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    logoutbtn () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17a2b8 ;
}

.nav{
  color: #17a2b8;
}

</style>
