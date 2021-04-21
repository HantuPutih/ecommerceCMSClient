<template>
  <div class="container">
    <br>
    <h2 style="color: black;">Edit Banner</h2>
    <form>
      <div class="form-group">
        <label for="nameAddProduct">Title:</label>
        <input type="text" class="form-control" id="nameAddProduct" placeholder="Enter banner's title" v-model="banner.title">
      </div>
      <div class="form-group">
        <label for="imageUrlAddBanner">Image URL: </label>
        <input type="text" class="form-control" id="imageUrlAddBanner" placeholder="enter product's image Url" v-model="banner.image_url">
      </div>
      <div class="form-group">
        <label for="category">Status: </label>
        <select class="form-control" id="category-banner" v-model="banner.status">
          <option value="" disabled>-select status-</option>
          <option value="true">up</option>
          <option value="false">down</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="editBannerBtn()">Edit Banner</button> |
      <button type="submit" class="btn btn-danger" @click.prevent="cancelBtnBanner()">Cancel</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable eol-last */

export default {
  methods: {
    editBannerBtn () {
      this.$store.dispatch('editBanner', {
        title: this.banner.title,
        imageUrl: this.banner.image_url,
        status: this.banner.status,
        id: this.banner.id
      })
    },
    cancelBtnBanner () {
      this.$router.push('/BannerList')
    }
  },
  computed: {
    banner () {
      return this.$store.state.findOneBanner
    }
  }
}
</script>

<style>
.heading{
  margin-top: 10%;
}
</style>