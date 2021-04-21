<template>
  <div class="container">
    <br>
    <h2>Add Product</h2>
    <form>
      <div class="form-group">
        <label for="nameAddProduct">Product Name:</label>
        <input type="text" class="form-control" id="nameAddProduct" placeholder="Enter Product's Name" v-model="newProduct.name">
      </div>
      <div class="form-group">
        <label for="imageUrlAddProduct">Image URL: </label>
        <input type="text" class="form-control" id="imageUrlAddProduct" placeholder="enter product's image Url" v-model="newProduct.image_url">
      </div>
      <div class="form-group">
        <label for="category">Category select: </label>
        <select class="form-control" id="category" v-model="newProduct.category">
          <option value="" disabled>-select product category-</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="other">other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="priceAddProduct">Price: </label>
        <input type="number" class="form-control" id="priceAddProduct" placeholder="enter product's price" v-model="newProduct.price" value="0">
      </div>
      <div class="form-group">
        <label for="stockAddProduct">Stock: </label>
        <input type="number" class="form-control" id="stockAddProduct" placeholder="enter product's stock" v-model="newProduct.stock" value="0">
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addProdBtn()">Add Product</button> |
      <button type="submit" class="btn btn-danger" @click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        category: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProdBtn () {
      this.$store.dispatch('addProduct', {
        name: this.newProduct.name,
        imageUrl: this.newProduct.image_url,
        category: this.newProduct.category,
        price: this.newProduct.price,
        stock: this.newProduct.stock
      }).catch(err => { console.log({ err }) })
    },
    cancel () {
      this.$router.push('/ProductList')
    }
  },
  computed: {

  }
}
</script>

<style>
h2 {
  margin-top: 5%;
}
</style>