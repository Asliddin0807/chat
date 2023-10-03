const mongoose = require('mongoose')

const connectionData = () => {
    let mongo = mongoose.connect('mongodb://127.0.0.1:27017/chat')
    .then(() => {
        console.log('data is connected!');
    }).catch((err) => {
        console.log('data not connected!');
    });

    return mongo
}

module.exports = { connectionData }