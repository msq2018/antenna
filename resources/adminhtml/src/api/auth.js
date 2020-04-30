import axios from '@/helpers/request'

export function login (parameter) {
    return axios({
        url: 'admin/user/login',
        method: 'post',
        data: parameter
    })
}
