import React from 'react';
import Clients from './Clients.js';
import Login from './Login';
import Logout from './Logout';
import {AuthContext} from './AuthContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(login) {
    console.log(login);
    this.setState(state => ({
      auth: login
    }));
  }

  handleLogout() {
    console.log("logout");
    this.setState(state => ({
      auth: null
    }));
  }

  render() {    
    return (
      <div className="grid-container">
        <header>
              <a href="/">Clients front-end by Nicolas CLEMENT</a>       
        </header>
        <main>
        {this.state.auth ? <Logout user={this.state.auth.user} onLogout={this.handleLogout}/> : 
        <Login onLogin={this.handleLogin}/>}

        <h1>Client List</h1>

        <AuthContext.Provider value={this.state.auth}>
          <AuthContext.Consumer>
            {(auth) => 
              <Clients auth={auth}/>
            }
          </AuthContext.Consumer>
        </AuthContext.Provider>
        </main>
        <footer>
                 For FIS, 2020-2021
        </footer>
      </div>
    );
  }
}

export default App;
