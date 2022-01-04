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

const create = newObject => {
    return axios.post(baseUrl, newObject)
    .then(response => response.data)
}
  
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const update = (id) => {
    console.log(id)
    console.log(typeof(id))
    console.log(id.trim())
    return axios.put(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const personServices = { getAll, get, create, remove, update }
export default personServices