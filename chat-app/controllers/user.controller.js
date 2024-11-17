const User = require('../models/user.model');

module.exports.get_users = async (req, res) => {
    try {
        const id = req.userId;
        const users = await User.find({ _id: { $ne: id } }).select('-password -createdAt -updatedAt -__v');
        if (!users) {
            return res.status(404).json({ error: "error user not exist" });
        };
        res.render('users', { users, senderId: id })
    } catch (error) {
        console.log(error.message);
    }
}