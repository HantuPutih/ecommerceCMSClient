/* eslint-disable eol-last */
import axios from 'axios'

const instance = axios.create({
  baseURL: ' https://jualan-admin.herokuapp.com/'
})

export default instance