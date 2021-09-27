const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://ID:PASSword@cluster0.rblth.mongodb.net/test",
    { useNewURLParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) 
            console.log("MongoDB connecte");
        else 
            console.log("connection error : " + err);
    }
)