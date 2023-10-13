import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

axios.interceptors.request.use(config => {
    let token = localStorage.getItem('user')
    const auth = token ? `Token ${token}`: ''
    config.headers.Authorization = auth
    return config
})

export default axios