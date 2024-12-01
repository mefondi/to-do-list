const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    title: {type: String, required:true},
    description: {type: String},
    date: {type: Number, required:true},
    status: {type: String, default: 'Активна'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = model('Task', UserSchema)