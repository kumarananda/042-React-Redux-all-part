import mongoose from "mongoose";


const ProductSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    regular_price : {
        type : Number,
        required : true
    },
    sale_price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    photo : {
        type : String,
        required : true
    },

},
{
    timestamps : true
})


// export Schema
export default mongoose.model('Product', ProductSchema)