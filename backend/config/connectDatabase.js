const mongoose = require('mongoose');

// Connect to MongoDB
const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI). then((con) => {       
            console.log('MongoDB connected to host: ' + con.connection.host);
        })
};

module.exports = connectDatabase;
