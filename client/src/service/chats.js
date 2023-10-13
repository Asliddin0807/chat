import axios from './axios'

const ChatService = {
    getMyChats(){
        return axios.get('/inbox')
    },

    getMessages(chat_id){
        return axios.post(`/get_chat?chat_id=${chat_id}`)
    },
}

export default ChatService