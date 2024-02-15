const mongoose = require('mongoose');

mongoose.connect("mongodb://my-mongoose-app:27017/futstore")
.then(()=>{
    console.log("bannerdb running successfully")
})
.catch(()=>{
    console.log("bannerdb failed to connect")})

    const bannerSchema = new mongoose.Schema({
        banner:{
            type:String
        },
        status:{
            type:String,
            default:"active"
        }
        })

    const banners = new mongoose.model('banner',bannerSchema);

module.exports=banners