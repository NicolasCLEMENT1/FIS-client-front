import React from 'react';
import LoginApi from './loginApi';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleLogin() {
        LoginApi.login(this.state.name, this.state.password).then(result => {
            this.props.onLogin(result);
        });
    }

    render() {
        return(
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <div className="col">
                        <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} placeholder="User name"/>
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
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