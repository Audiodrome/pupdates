const db = require('../index.js');

const roomSchema = new db.Schema({
  _id: db.Schema.Types.ObjectId,
  users: [String],
  uids: [String],
  messages: [{
    user: String,
    text: String,
    // createdAt: new Date(),
  }],
});

module.exports = db.mongoose.model('Rooms', roomSchema);