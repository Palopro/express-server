import mongoose from 'mongoose';

const path = 'mongodb://localhost/testDB';
const options = {
  useNewUrlParser: true,
};

mongoose.connect(path, options);
mongoose.set('debug', true);

module.exports = mongoose;