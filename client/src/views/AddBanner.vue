<template>
  <div class="container">
    <br>
    <h2>Add Banner</h2>
    <form>
      <div class="form-group">
        <label for="nameAddProduct">Title:</label>
        <input type="text" class="form-control" id="nameAddProduct" placeholder="Enter banner's title" v-model="newBanner.title">
      </div>
      <div class="form-group">
        <label for="imageUrlAddBanner">Image URL: </label>
        <input type="text" class="form-control" id="imageUrlAddBanner" placeholder="enter banner's image Url" v-model="newBanner.image_url">
      </div>
      <div class="form-group">
        <label for="category">Status: </label>
        <select class="form-control" id="category-banner" v-model="newBanner.status">
          <option value="" disabled>-select status-</option>
          <option value="true">up</option>
          <option value="false">down</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addBannerBtn()">Add Banner</button> |
      <button type="submit" class="btn btn-warning" @click.prevent="cancelBtn()">Cancel</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable eol-last */

export default {
  data () {
    return {
      newBanner: {
        title: '',
        imageUrl: '',
        status: ''
      }
    }
  },
  methods: {
    addBannerBtn () {
      console.log(this.newBanner.image_url)
      this.$store.dispatch('addBanner', {
        title: this.newBanner.title,
        imageUrl: this.newBanner.image_url,
        status: this.newBanner.status
      }).catch(err => { console.log({ err }) })
    },
    cancelBtn () {
      this.$router.push('/BannerList').catch((err) => { console.log({ err }) })
    }
  }

}
</script>

<style scoped>
h2 {
  margin-top: 5%;
}
</style>>