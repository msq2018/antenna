
import {login} from "@/api/auth";

export default {
    state:{
        token: '',
    },
    mutations:{
        setToken: (state, token) => {
            state.token = token
        }
    },
    actions:{
        login ({commit}, data) {
            console.log(data)
            return new Promise((resolve, reject) => {
                login(data).then(response => {
                    console.log(response);
                    //resolve(result)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}
