const mongoose = require('mongoose');

mongoose.connect("mongodb://my-mongoose-app:27017/futstore")
.then(()=>{
    console.log("offerdb running successfully")
})
.catch(()=>{
    console.log("offerdb failed to connect")})

    const offerSchema = new mongoose.Schema({
        category: {
            type: String,
            required: true,
            unique: true,
            index: true // This line specifies that an index should be created for the 'category' field
        },
        discount: {
            type: Number,
            required: true
        },
        expirydate: {
            type: Date,
            required: true
        }
    });
    

    const offers = new mongoose.model('offer',offerSchema);

module.exports=offers