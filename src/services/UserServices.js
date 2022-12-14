import http from './BaseService'

export const getUser = () => http.get('/users').then((res) => res)
export const getUserDetail = (id) => http.get(`/users/${id}`).then((res) => res)
export const createUser = (body) => http.post('/users', body).then((res)=> res)
export const updateUser = (id, body) => http.patch(`/users/${id}`, body).then((res)=> res)
export const deleteUser = (id) => http.delete(`/users/${id}`).then((res)=> res)