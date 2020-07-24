import axios from '@/helpers/request'

export function login (parameter) {
    return axios({
        url: 'user/login',
        method: 'post',
        data: parameter
    })
}
