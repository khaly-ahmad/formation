const Conversation = require('../models/conversation.model');
const Message = require('../models/message.model');
const sendMessage = async (req, res) => {
    try {
        const senderId = req.userId;
        const receiverId = req.params.id;
        const { message } = req.body;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId,receiverId]}
        })

        if(!conversation){
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

        
        res.status(201).json({ newMessage })
    } catch (error) {
        console.log(error)
    }
}
const getMessages = async (req, res) => {
	try {
		const { id : receiverId } = req.params;
		const senderId = req.userId;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		}).populate("messages"); 

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports ={ sendMessage, getMessages};