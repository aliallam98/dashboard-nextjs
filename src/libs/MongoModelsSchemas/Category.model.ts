import mongoose, {Schema, model} from 'mongoose'

const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{
    timestamps: true
})

const categoryModel = mongoose.models.Category|| model("Category",categorySchema)

export default categoryModel