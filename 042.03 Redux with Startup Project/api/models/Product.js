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
        type : Array,
        default : ['p.png']
    },
    gallery : {
        type : Array,
        default : ['p.png']
    },
    category : {
        type : Array,
        default  : []
    },
    tags : {
        type : Array,
        default :[]
    },

},
{
    timestamps : true
})


// export Schema
export default mongoose.model('Product', ProductSchema)