<template>
    <div class="container">
        <div class="border rounded d-flex gap-1 mt-3 mb-3">
            <div class="border" style="width: 360px; height: 95vh; background-color: rgb(8, 8, 54);">
                    <div class="d-flex flex-row align-items-center mb-4 mt-3 mx-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" placeholder="username"/>
                    </div>
                    <button class="btn btn-primary" @click="chatInfo">S</button>
                </div>
                <div v-for="item in chats" :key="item">
                    <ChatItems :chat="chats"/>
                </div>
            </div>
            <div id="chat" class="mx-1 rounded" style="background-color: rgb(8, 8, 54); width: 100%;">
                <nav class="navbar navbar-light bg-light mx-1 mt-1 rounded position">
                    <div class="picture-user mt-1 mx-2 mb-2 d-flex align-items-center gap-5">
                        <img src="">
                        <h3 class="mx-3">Asliddin</h3>
                    </div>
                </nav>
                <messageItems />
                <div id="input" class="d-flex align-items-end flex-row align-items-center mb-5">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0 mx-4" style="margin-top: 10px;">
                        <input type="text" id="form3Example1c" class="form-control" placeholder="type text..."/>
                    </div>
                    <button class="btn btn-primary mt-2">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChatItems from './ChatItems.vue'
import messageItems from './messageItems.vue'


export default {
    components: {
        ChatItems,
        messageItems
    },

    mounted() {
        this.$store.dispatch('getUserChats')
    },

    computed: {
        chats(){
            return this.$store.state.chats.getChats
        },

        chatInfo(){
            return this.$store.state.chats.userMessages
        }
    },

    methods: {
        
    },
}
</script>
<style scoped>
    .picture-user{
        background-color: blueviolet;
        width: 55px;
        height: 55px;
        border-radius: 100%;  
    }



    .message{
        border: 1px solid black;
        width: 100%;
        height: 63vh;
    }
</style>