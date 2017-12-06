import mongoose from 'mongoose';
import usersSchema from './users';
import database from '../database';


export default class mongoDatabase extends database {

	constructor() {
		super();
		let usersSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String
});

		require('./users');
		this.User = mongoose.model('users', usersSchema);
	}

	connect() {
		this.url = 'mongodb://localhost:27017/fantasy';
		this.mongooseConnect = mongoose.connect(this.url);
	}

	// Currently only handles password-based
	authUser(user) {
		let username = user.username;
		this.User.findOne({ 'username': username }, '*', function(err, user) {
			if(err) { 
				console.log(' NO USER');
				return handlError(err); 
			}
			console.log('USER');
		});
	}
}