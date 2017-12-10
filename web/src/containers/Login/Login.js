import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  };

  loginUser = (event) => {
    event.preventDefault();
    const user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    this.props.login(user);
  };

  render() {
    const {user, logout} = this.props;
    const styles = require('./Login.scss');
    return (
      <div className={styles.loginPage + ' container'}>
        <Helmet title="Login"/>
        {!user &&
          <div className={styles.box + ' box'}>
              <h1>Login</h1>
              <hr />
              <div className={styles.formContainer}>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <input className={styles.formItem} type="text" ref="username" placeholder="username"/>
                  <input className={styles.formItem} type="password" ref="password" placeholder="password"/>
                  <button className={styles.formItem} onClick={this.loginUser}>
                    <i className="fa fa-sign-in"/>{' '}Log In
                  </button>
                </form>
              </div>
          </div>
        }
        {user &&
          <div>
            <p>You are currently logged in as {user.name}.</p>
            <div>
              <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out"/>{' '}Log Out</button>
            </div>
          </div>
          }
        </div>
    );
  }
}
