import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLoggedIn: localStorage.getItem('access_token') || false,
    findOne: undefined,
    banners: [],
    findOneBanner: undefined
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setLogin (state, payload) {
      state.isLoggedIn = payload
    },
    setOne (state, payload) {
      state.findOne = payload
    },
    // banner
    setAllBanner (state, payload) {
      state.banners = payload
    },
    setFindOneBanner (state, payload) {
      state.findOneBanner = payload
    }
  },
  actions: {
    loginbtn (context, payload) {
      const { email, password } = payload
      axios({
        url: '/user/login',
        method: 'POST',
        data: {
          email,
          password
        }
      }).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        context.commit('setLogin', true)
        router.push('/ProductList')
      }).catch(err => {
        let timerInterval
        Swal.fire({
          title: err.response.data.error,
          html: 'check your credentials',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      })
    },

    findOne (context, payload) {
      const { id } = payload
      axios({
        url: '/product/' + id,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('setOne', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },

    getAllProducts (context) {
      axios({
        url: '/product',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('setProducts', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    addProduct (context, payload) {
      const { name, imageUrl, category, price, stock } = payload
      axios({
        url: '/product',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image_url: imageUrl,
          category,
          price,
          stock
        }
      }).then(data => {
        router.push('/ProductList')
      }).catch(err => {
        let timerInterval
        Swal.fire({
          title: err.response.data.error,
          html: 'check your input data',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      })
    },
    editProd (context, payload) {
      const { name, imageUrl, category, price, stock, id } = payload
      axios({
        url: '/product/' + id,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image_url: imageUrl,
          category,
          price,
          stock
        }
      }).then(data => {
        this.dispatch('getAllProducts')
        router.push({ name: 'ProductList' }) // '/ProductList'
        console.log('suksess')
      }).catch(err => {
        let timerInterval
        Swal.fire({
          title: err.response.data.error,
          html: 'check your input data',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        console.log({ err })
      })
    },
    destroyProduct (context, payload) {
      axios({
        url: '/product/' + payload,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(data => {
        console.log('success delete')
        this.dispatch('getAllProducts')
      }).catch(err => {
        console.log({ err })
      })
    },
    logout (context, payload) {
      context.commit('setLogin', false)
      localStorage.clear()
      router.push('/')
    },
    // CRUD banner
    getAllBanners (context, payload) {
      axios({
        url: '/banner',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('setAllBanner', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    addBanner (context, payload) {
      const { title, imageUrl, status } = payload
      axios({
        url: '/banner',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title,
          image_url: imageUrl,
          status
        }
      }).then(response => {
        router.push('/BannerList')
      }).catch(err => {
        let timerInterval
        Swal.fire({
          title: err.response.data.error === 'Banner.image_url cannot be null' ? 'image url cannot be empty' : err.response.data.error,
          html: 'check your input data',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
      })
    },
    destroyBanner (context, payload) {
      axios({
        url: '/banner/' + payload,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        console.log('banner deleted')
        this.dispatch('getAllBanners')
      }).catch(err => {
        console.log({ err })
      })
    },
    findOneBanner (context, payload) {
      axios({
        url: '/banner/' + payload.id,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        context.commit('setFindOneBanner', response.data)
      }).catch(err => {
        console.log({ err })
      })
    },
    editBanner (context, payload) {
      const { title, imageUrl, status, id } = payload
      axios({
        url: '/banner/' + id,
        method: 'PUT',
        data: {
          title,
          image_url: imageUrl,
          status
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(response => {
        this.dispatch('getAllBanners')
        router.push('/BannerList')
      }).catch(err => {
        let timerInterval
        Swal.fire({
          title: err.response.data.error === 'Banner.image_url cannot be null' ? 'image url cannot be empty' : err.response.data.error,
          html: 'check your input data',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
              const content = Swal.getContent()
              if (content) {
                const b = content.querySelector('b')
                if (b) {
                  b.textContent = Swal.getTimerLeft()
                }
              }
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        console.log({ err })
      })
    }
  },
  modules: {
  }
})
