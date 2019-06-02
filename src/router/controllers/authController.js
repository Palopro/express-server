import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.model';

module.exports.signUpUser = async (req, res, next) => {
  try {
    req.body.password = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(8)
    );
    const saved = await User.create(req.body);

    const user = saved.toObject();
    delete user.password;

    const token = await jwt.sign({ id: user._id, type: 'access' }, 'secret', { expiresIn: '30d' });
    res.send({ token, user });
  } catch (error) {
    next({ code: 400, message: error.message });
  }
};

module.exports.signInUser = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ where:{ email } }).lean();
    if(!user) return next({ code: 404, message: 'Not Found' });

    const passwordIsSame = await bcrypt.compare(password, user.password);
    if(!passwordIsSame) return next ({ code: '404', message: 'Not Found' });

    const token = await jwt.sign({ id: user._id }, 'secret', { expiresIn: '30d' });
    delete user.password;
    res.send({ token, user });

  } catch (error) {
    next({ code: 400, message: error.message });
  }
};
