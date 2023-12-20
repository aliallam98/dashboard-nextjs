import mongoose, {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    category:String,
    price:{
        type:Number,
        min:1,
        required:true
    },
    onSale:{
        type:String,
        default:"No",
        enum:["Yes","No"]
    },
    discount:Number,
    stock:Number,
    mainImage:String,
    subImages:[String],
},
{
    timestamps: true
})

const productModel = mongoose.models.Product|| model("Product",productSchema)

export default productModel