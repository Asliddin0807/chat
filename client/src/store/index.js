import { createStore } from 'vuex'
import auth from '../moduls/auth'
import chats from '../moduls/chat'

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { auth, chats }
})

export default store