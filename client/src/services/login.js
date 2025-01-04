import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login'

export const login = async ({credentials}) => {
    const request = axios.post(baseUrl, credentials)
    return request.data
}