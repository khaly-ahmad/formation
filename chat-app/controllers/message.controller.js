const Conversation = require('../models/conversation.model');
const Message = require('../models/message.model');
const User = require('../models/user.model');
const sendMessage = async (req, res) => {
    try {
        const senderId = req.userId;
        const { id: receiverId } = req.params;
        const { message } = req.body;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([conversation.save(), newMessage.save()]);

        // const io = req.app.get("socketio"); // Récupère l'instance Socket.IO
        // io.to(receiverId).emit("receiveMessage", {
        //     senderId,
        //     message,
        // }); 

        res.status(302).redirect(`/api/message/${receiverId}`)
    } catch (error) {
        console.log(error)
    }
}
const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.userId;
        const users = await User.find({ _id: { $ne: senderId } }).select('-password -createdAt -updatedAt -__v');

        if (!users) {
            return res.status(404).json({ error: "error user not exist" });
        };
        let conversation;
        if (senderId !== receiverId) {
            conversation = await Conversation.findOne({
                participants: { $all: [senderId, receiverId] },
            }).populate("messages");
        }
        if (!conversation) {
            return res.render('users', { users, senderId, messages: ''});
        }

        const messages = conversation.messages;
        res.render('users', { users, senderId, messages, id :req.params.id });
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { sendMessage, getMessages };