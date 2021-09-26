const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://yvallette:Azqswx123+@cluster0.rblth.mongodb.net/test",
    { useNewURLParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) 
            console.log("MongoDB connecte");
        else 
            console.log("connection error : " + err);
    }
)