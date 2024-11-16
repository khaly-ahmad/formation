const mongoose = require('mongoose');
const Schema = mongoose.Schema
const conversationSchema = new Schema({
    participants: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [],
        },
    ]

},{ timestamps: true });

const Conversation = mongoose.model('Conversation',conversationSchema);

module.exports = Conversation;