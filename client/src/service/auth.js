import axios from './axios'

const AuthService = {
    regis(user){
        return axios.post('/regis', user)
    },

    login(user){
        return axios.post('/login', user)
    }
}

export default AuthService 