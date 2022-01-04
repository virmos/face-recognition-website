import axios from 'axios'

const baseUrl = '/api/classrooms'

const getAll = () => {
    return axios.get(baseUrl)
    .then(response => response.data)
}

const get = (id) => {
    return axios.get(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const create = () => {
    return axios.post(baseUrl)
    .then(response => response.data)
}

const update = (id) => {
    return axios.put(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const personServices = { getAll, get, create, update }
export default personServices