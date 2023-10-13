<template>
    <div>
        <div v-for="item in chat" :key="item">
            <div @click="chatInfo(item.chatId, item._id)" class="d-flex flex-row align-items-center mb-2 mt-2 mx-4 gap-4 rounded bg-success user-select-none" style="cursor: pointer;">
                <div class="picture-user mt-2 mx-2 mb-2">
                    <img :src="img">
                </div>
                <div>
                    <p class="mt-3">{{item.username}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from '../service/axios'
export default {
    props: {
        chat: {
            type: Object,
            require: true
        }
    },

    methods: {
        async chatInfo(chat_id, user_id){
            window.localStorage.setItem('chat_id', chat_id)
            window.localStorage.setItem('user_id', user_id)
            this.$store.dispatch('getMessagesUser')
        }
    },
    
}
</script>
<style>
    
</style>