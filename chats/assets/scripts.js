const socket = io('http://localhost:3000')
const username = document.getElementById('username')
const message = document.getElementById('message')
const user = document.getElementById('user')
const user_message = document.getElementById('user-message')
const button = document.getElementById('button')
const messages = document.getElementById('messages')

const user_name = prompt('Ismingiz?')
user.innerHTML = `${user_name}`

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(user_message.value && user_message != ''){
        socket.emit('chat message', {
            message: user_message.value,
            user: user_name
        })
    }

   

    user_message.value = ''
})

socket.on('chat message', (data) => {
    const item = document.createElement('li')
    item.innerHTML = `<h3>${data.user}:</h3> <h3>${data.message}<h3>`
    messages.appendChild(item)
    messages.scrollTo(0, messages.scrollHeight)
})
