<template>
  <div>
    <h2>Edit Product id: <b>{{product.id}}</b></h2>
    <form>
      <div class="form-group">
        <label for="nameAddProductEdit">Product Name:</label>
        <input type="text" class="form-control" id="nameAddProduct" placeholder="Enter Product's Name" v-model="product.name">
      </div>
      <div class="form-group">
        <label for="iamgeUrlAddProduct">Image URL: </label>
        <input type="text" class="form-control" id="iamgeUrlAddProduct" placeholder="enter product's image Url" v-model="product.image_url">
      </div>
      <div class="form-group">
        <label for="category">Category select: </label>
        <select class="form-control" id="category" v-model="product.category">
          <option value="" disabled>-select product category-</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="other">other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="priceAddProduct">Price: </label>
        <input type="number" class="form-control" id="priceAddProduct" placeholder="enter product's price" v-model="product.price">
      </div>
      <div class="form-group">
        <label for="stockAddProduct">Stock: </label>
        <input type="number" class="form-control" id="stockAddProduct" placeholder="enter product's stock" v-model="product.stock">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="editProdBtn()">Edit Product</button> |
      <button type="submit" class="btn btn-danger" @click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  methods: {
    editProdBtn () {
      this.$store.dispatch('editProd', {
        name: this.product.name,
        imageUrl: this.product.image_url,
        category: this.product.category,
        price: this.product.price,
        stock: this.product.stock,
        id: this.product.id
      })
    },
    cancel () {
      this.$router.push('/ProductList')
    }
  },
  computed: {
    product () {
      return this.$store.state.findOne
    }
  }
}
</script>

<style>

</style>