<template>
  <div>
    <br>
    <div class="containerProd">
    <!-- table  -->
      <div class="product-list">
        <br>
        <div class="table-container">
          <h1>Product List</h1>
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">Product Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product.id">
              <product-table v-bind:product="product">
              </product-table>
            </tbody>
          </table>
        </div>
      </div>
      <!-- edit page -->
      <div class="product-edit">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
import ProductTable from '../components/ProductTable.vue'

export default {
  components: {
    ProductTable
  },
  methods: {
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  updated () {
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style scoped>

.table, .table-container{
  border-radius: 10px;
  width: 50vw;

}

.containerProd {
  margin: 2% 5% ;
  display: flex;
  flex-direction: row;
}
.product-edit {
  margin: 5% 10%;
  height: 100%;
  width: 45vw;
  position: sticky;
  top: 11.5vh;
}
</style>