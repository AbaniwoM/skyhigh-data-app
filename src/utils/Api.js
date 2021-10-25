import axios from 'axios'

const endpoint = 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub'

const user = JSON.parse(sessionStorage.getItem('user'))
export const authAxios = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Bearer ${user.token}`
  }
})