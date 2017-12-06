import mongoose from 'mongoose';


let usersSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String
});
console.log('DO I RUN WITH EVERY IMPORT?');

export { usersSchema };