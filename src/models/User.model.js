import mongoose from 'mongoose';

/**
 * @field firstName - first name user
 * @field lastName - last name user
 * @field email - email
 * @field password - password (bcrypt)
 * @field birthDaate - birth date user
 * @field profilePicture - avatat (link to image)
 */

const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      select: false,
      required: true
    },
    birthDate: {
      type: String
    },
    profilePicture: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

const User = mongoose.model('User', Schema);

module.exports = User;
