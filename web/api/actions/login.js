export default function login(req) {
  const user = {
    user: req.body.user
  };

  const db = req.app.locals.db;

  let authenticatedUser = db.authUser(user);
  if(!authenticatedUser) {

  }

  // delete this line
  req.session.user = user;
  return Promise.resolve(user);
}
