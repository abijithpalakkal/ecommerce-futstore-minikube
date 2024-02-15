const mongoose=require("mongoose")
const { Schema } = mongoose;
mongoose.connect("mongodb://my-mongoose-app:27017/detailsofuser")
.then(()=>{
    console.log("walletdb running successfully")
})
.catch(()=>{
    console.log("walletdb  failed to connect")
})


const walletSchema=new mongoose.Schema({
    userid:{
        type: Schema.Types.ObjectId,
        ref:'Users'
    
    },
    wallet:{
        type:Number
    }
})
const wallets=new mongoose.model('wallet',walletSchema)
module.exports=wallets