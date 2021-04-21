<template>
  <div>
    <br>
    <div class="container-banner">
    <!-- table  -->
      <div class="banner-list">
        <br>
        <div class="table-container">
          <h1>Banner List</h1>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Banner Id</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-for="banner in banners" :key="banner.id">
              <banner-table v-bind:banner="banner">
              </banner-table>
            </tbody>
          </table>
        </div>
      </div>
      <!-- edit page -->
      <div class="banner-edit">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
import BannerTable from '../components/BannerTable.vue'
export default {
  components: {
    BannerTable
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.$store.dispatch('getAllBanners')
  }
}
</script>

<style>

.table, .table-container{
  border-radius: 10px;
  width: 50vw;

}

.container-banner {
  margin: 2% 5% ;
  display: flex;
  flex-direction: row;
}
.banner-edit {
  margin: 5% 10%;
  height: 100%;
  width: 45vw;
  position: sticky;
  top: 11.5vh;
}
</style>