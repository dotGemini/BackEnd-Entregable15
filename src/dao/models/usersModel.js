import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    birth_date :Number,
    password: String,
    admin: {
        type: String,
        default: 'user'
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Carts",
        required: false,
    },
    documents: [{
        name: String,
        reference: String
    }],
    last_connection: {
        type: Data,
        required: false
    }
})

const userModel = mongoose.model(collection,schema);

export default userModel;