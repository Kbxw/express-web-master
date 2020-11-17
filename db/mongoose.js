const mongoose = require('mongoose')
const MONGODB_PSSWRD = process.env.MONGODB_PSSWRD;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})