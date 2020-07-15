const app = require("./src/app");
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/bpimail', {
    useNewUrlParser: true
});
app.listen(3000);