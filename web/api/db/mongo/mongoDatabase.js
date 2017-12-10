import mongoose from 'mongoose';
import setUsersSchema from './users';
import database from '../database';


export default class mongoDatabase extends database {

	constructor() {
		super();
	}

	connect() {
		this.url = 'mongodb://localhost:27017/fantasy';
		this.mongooseConnect = mongoose.connect(this.url);

    this.User = mongoose.model('users', setUsersSchema());
	}

	// Currently only handles password-based
  // RETURNS: null if user is not found
	authUser(user) {
		let username = user.username;
		this.User.findOne({ 'username': username }, '*', function(err, user) {
			if(err) {
				return handlError(err);
			}
			if(user) {
				return user;
			} else {
			  return null;
			}
		});
	}
}