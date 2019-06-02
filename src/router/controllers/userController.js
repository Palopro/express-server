import User from '../../models/User.model';

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    next({ code: 500, message: 'Ooops....' });
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
