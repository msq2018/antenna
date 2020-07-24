import Vue from "vue";
import {login} from "@/api/auth";
import {ACCESS_TOKEN} from "@/store/constant";

export default {
    state:{
        token: '',
        roles: '',
    },
    mutations:{
        setToken: (state, token) => {
            state.token = token
        },
        setRoles:(state,roles)=>{
            state.roles = roles
        }
    },
    actions:{
        /**
         * User login
         * @param commit
         * @param data
         * @returns {Promise<unknown>}
         */
        login ({commit}, data) {
            return new Promise((resolve, reject) => {
                login(data).then(response => {
                    const result = response.result,
                        expiresAt = result.expires_at,
                        beginDate = new Date(),
                        endDate = new Date(expiresAt.replace(/-/g, "/"));
                    Vue.ls.set(ACCESS_TOKEN, result.token, endDate.getTime()-beginDate.getTime());
                    commit('setToken',result.token);
                    resolve(result)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        /**
         * Get user info
         * @param commit
         */
        getUserInfo({commit}){
            return new Promise(resolve=>{
                //todo get user roles
                commit('setRoles',['admin-all','user-all'])
                resolve();
            })

        }
    }
}
