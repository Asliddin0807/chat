import AuthService from "../service/auth";

const state = {
    isLoggedIn: null,
    error: null
}

const mutations = {
    regisSuccess(state, payload){
        state.isLoggedIn = payload
        state.error = null
    },

    regisFailure(state, payload){
        state.isLoggedIn = null
        state.error = payload
    },

    loginSuccess(state, payload){
        state.isLoggedIn = payload,
        state.error = null
    },

    loginFailure(state, payload){
        state.error = payload,
        state.isLoggedIn = null
    }

}

const actions = {
    registration(context, user){
        return new Promise((resolve, reject) => {
            AuthService.regis(user)
            .then((result) => {
                context.commit('regisSuccess', result)
                resolve(result)
                
            }).catch((err) => {
                context.commit('regisFailure', err)
                reject(err)
            });
        })
    },

    login(context, user){
        return new Promise((resolve, reject) => {
            AuthService.login(user)
            .then((result) => {
                context.commit('loginSuccess', result)
                resolve(result)
                window.localStorage.setItem('user', result.data.data.token)
            }).catch((err) => {
                context.commit('loginFailure', err)
                reject(err)
            });
        })
    }
}

export default {
    state,
    mutations,
    actions
}