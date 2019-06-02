import User from '../models/User.model';

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    next({ code: 500, message: 'Ooops....' });
  }
};

module.exports.createUser = async (req, res, next) => {
  const userData = req.body;

  try {
    const newUser = new User(userData);
    const saved = await newUser.save();
    res.send(saved);
  } catch (error) {
    next({ code: 400, message: error.message });
  }
};

module.exports.getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    next({ code: 500, message: 'Ooops.....' });
  }
};
