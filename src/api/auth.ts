import axios from './axios'

export const loginRequest = (user: any) => axios.post('/auth/login', user)

export const verifyTokenRequest = () => {
    return axios.post('/auth/verify-token')
}