import ChatService from "../service/chats";

const state = {
    getChats: null,
    getUser: null,
    error: null,
    userMessages: []
}

const mutations = {
    getChatsSuccess(state, payload){
        state.getChats = payload
        state.error = null
    },

    getChatsFailure(state, payload){
        state.error = payload
        state.getChats = null
    },

    userMessageSuccess(state, payload){
        state.userMessages = payload
    },

    userMessageFailure(state, payload){
        state.error = payload
        state.userMessages = null
    }

}

const actions = {
    getUserChats(context){
        return new Promise((resolve, reject) => {
            ChatService.getMyChats()
            .then((result) => {
                context.commit('getChatsSuccess', result.data.data)
                resolve(result.data.data)
            }).catch((err) => {
                console.log(err)
            });
        })
    },

    getMessagesUser(context){
        return new Promise((resolve, reject) => {
            let chat_id = window.localStorage.getItem('chat_id')
            ChatService.getMessages(chat_id)
            .then((result) => {
                console.log(result.data.data.roomUser)
                context.commit('userMessageSuccess', result.data.data.roomUser)
            }).catch((err) => {
                
            });
        })
    }
}


export default {
    state,
    mutations,
    actions
}