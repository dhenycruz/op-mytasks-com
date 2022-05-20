import mongoose from 'mongoose';

const options = {
  user: 'dheny',
  pass: '1234df',
  dbName: 'tasksDB'
}

const connectToDatabase = (
  mongoDatabseURI = process.env.MONGO_URI
  || 'mongodb://localhost:27017',
) => mongoose.connect(mongoDatabseURI, options);

export default connectToDatabase;