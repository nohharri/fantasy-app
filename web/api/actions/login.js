export default function login(req) {
  const user = {
    user: req.body.user
  };

  const db = req.app.locals.db;

  db.authUser(user);

  //database.test();
  // delete this line
  req.session.user = user;
  return Promise.resolve(user);
}
