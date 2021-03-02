import React from 'react';
import LoginApi from './loginApi';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const username = event.target.username;
        const value = event.target.value;
        this.setState({
            [username]: value
        });
    }

    handleLogin() {
        LoginApi.login(this.state.username, this.state.password).then(result => {
            this.props.onLogin(result);
        });
    }

    render() {
        return(
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="col">
                        <input className="form-control" name="username" value={this.state.username} onChange={this.handleChange} defaultValue="Username"/>
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} defaultValue="Password"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Login;