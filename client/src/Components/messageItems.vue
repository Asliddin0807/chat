<template>
    <div>
        <div class="border mx-1 mt-1 chat-messages" style="width: 99%; height: 63vh">
            <div class="chat-messages-left" id="left">
                <h4>As</h4>
            </div>
            <div class="chat-messages-right" id="right">
                <h4>Asl</h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        senderName: {
            type: String,
            require: true
        },
        reciverName: {
            type: String,
            require: true
        }
    }
}
</script>
<style scoped>
    .chat-messages {
        display: flex;
        justify-content: space-between;
        max-height: 800px;
        overflow-y: scroll
    }    

    #right{
        width: auto;
        height: 40px;
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        background-color: rgb(50, 184, 70);
        border-radius: 10px;
        margin-top: 30px;
        margin-right: 10px;
    }

    #left{
        width: auto;
        height: 40px;
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        background-color: rgb(50, 184, 70);
        border-radius: 10px;
        margin-left: 10px;
        margin-top: 10px;
    }
</style>