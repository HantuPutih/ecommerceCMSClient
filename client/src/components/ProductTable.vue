<template>
  <tr>
    <td>
      {{product.id}}
    </td>
    <td>
      <img style="width:150px;" :src="product.image_url" alt="product image">
    </td>
    <td>
      {{product.name}}
    </td>
    <td>
      {{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}}
    </td>
    <td>
      {{product.stock}}
    </td>
    <td>
      {{product.category}}
    </td>
    <td>
      <button @click.prevent="editBtn(product.id)"
      class="btn btn-success"> Edit </button>
      <button type="button" class="btn btn-danger" @click.prevent="destroyBtn(product.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
/* eslint-disable eol-last */
import Swal from 'sweetalert2'

export default {
  props: ['product'],
  methods: {
    destroyBtn (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('destroyProduct', id)
          Swal.fire(
            'Deleted!',
            'Product has been deleted.',
            'success'
          )
        }
      })
    },
    editBtn (id) {
      this.$store.dispatch('findOne', { id })
      this.$router.push('/ProductList/' + id)
    }
  }
}
</script>

<style>

</style>