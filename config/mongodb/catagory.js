const mongoose=require("mongoose")
mongoose.connect("mongodb://my-mongoose-app:27017/detailsofuser")
.then(()=>{
    console.log("catagorydb running successfully")
})
.catch(()=>{
    console.log("catagorydb  failed to connect")
})
const CatagorySchema=new mongoose.Schema({
     Category:{
        type: String ,
        require:true
     },
     type:{
        type:Array,
        require:true
     }
})
const Catagory = new mongoose.model('Catagories', CatagorySchema);
module.exports=Catagory