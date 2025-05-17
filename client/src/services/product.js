import axios from 'axios'
const baseUrl = '/api/products'

const token = ''

export const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

export const getOne = async ({id}) => {
    const request = await axios.get(`${baseUrl}/${id}`)
    return request.data
}

export const createOne = async ({body}) => {
    const request = await axios.post(baseUrl, body, token)
    return request.data
}
