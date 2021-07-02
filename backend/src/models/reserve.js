const mongoose = require("mongoose");

const resveration =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:number,
        required:true
    },
    date:{
        type:Date,
        required:true,
    },
    nog:{
        type:Number,
        required:true
    },
    time:{
        type:Time,
        required:true
    }

})

//creating a collection
const Reserve = new mongoose.model("reserve_table",resveration);
module.exports=Register;