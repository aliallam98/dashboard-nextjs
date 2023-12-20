import mongoose, {Schema, model} from 'mongoose'

const customerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:[String],
    email:String,
    status:{
        type:String,
        default:"Active",
        enum:["Active","Blocked"]
    }
},{
    timestamps: true
})

const customerModel = mongoose.models.Customer|| model("Customer",customerSchema)

export default customerModel