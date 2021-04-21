<template>
  <tr>
    <td>
      {{banner.id}}
    </td>
    <td>
      <img style="width:400px;" :src="banner.image_url" alt="banner image">
    </td>
    <td>
      {{banner.title}}
    </td><td>
      {{banner.status ? 'Up' : 'Down'}}
    </td>
    <td>
      <!-- :banner="banner" -->
      <button @click.prevent="editBtnBanner(banner.id)"
      class="btn btn-success"> Edit </button>
      <button type="button" class="btn btn-danger" @click.prevent="destroyBtnBanner(banner.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
/* eslint-disable eol-last */
import Swal from 'sweetalert2'

export default {
  props: ['banner'],
  methods: {
    destroyBtnBanner (id) {
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
          this.$store.dispatch('destroyBanner', id)
          Swal.fire(
            'Deleted!',
            'Banner has been deleted.',
            'success'
          )
        }
      })
    },
    editBtnBanner (id) {
      this.$store.dispatch('findOneBanner', { id })
      this.$router.push('/BannerList/' + id)
    }
  }
}
</script>

<style>

</style>