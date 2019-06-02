import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

const User = mongoose.model('User', Schema);

module.exports = User;
