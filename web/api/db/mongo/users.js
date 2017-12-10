import mongoose from 'mongoose';


export default function setUsersSchema() {
  let usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
  });
  return usersSchema;
}