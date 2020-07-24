import axios from 'axios'

const getBaseUrl = () =>{
    const baseUrl = window.config.baseUrl||window.location.origin
    return baseUrl +"/admin/api/v1";
}

const setError = (error) => {
    /*if (error.response) {
        const data = error.response.data
        const token = Vue.ls.get(ACCESS_TOKEN)
        if (error.response.status === 403) {
            notification.error({message: 'Forbidden', description: data.message})
        }
        if (error.response.status === 401) {
            notification.error({ message: 'Unauthorized', description: ' verification failed' })
            if (token) {
                store.dispatch('Logout').then(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                })
            }
        }
    }*/
    return Promise.reject(error)
}

const instance = axios.create({
    baseURL: getBaseUrl(),
    timeout: 30000,
});

// request interceptor
instance.interceptors.request.use(config => {
    /*const token = Vue.ls.get(ACCESS_TOKEN)
    if (token) {
        config.headers[ 'Authorization' ] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
        config.headers['Shop-Store'] = Vue.ls.get(SHOP_STORE)
    }*/
    return config
}, setError)

// response interceptor
instance.interceptors.response.use((response) => {
    return response.data
}, setError)




export default instance ;
