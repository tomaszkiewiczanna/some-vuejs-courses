import axios from 'axios'

export function getMessage() {
  return axios.get('http://localhost:8080/message').then(response => {
    return response.data
  })
}