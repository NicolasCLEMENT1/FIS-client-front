import React from 'react'

class NewClient extends React.Component {
    constructor(props) {
        super(props);
        this.changeClient = this.changeClient.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        this.state = {username: '', password:'', firstName: '', lastName: '', address: '', email: '', phone: ''};
    }

    changeClient(event) {
        const username = event.target.username;
        const value = event.target.value;
        this.setState({
            [username]: value
        });
    }

    clickAdd() {
        this.props.onAddClient(this.state);
        this.setState({
            username: '',
            password:'', 
            firstName: '', 
            lastName: '', 
            address: '', 
            email: '',
            phone:''
        })
    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="username" value={this.state.username} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="password" value={this.state.password} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="firstName" value={this.state.firstName} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="lastName" value={this.state.lastName} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="address" value={this.state.address} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="email" value={this.state.email} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="phone" value={this.state.phone} onChange={this.changeClient}/></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Client</button> </td>
            </tr>   
        );
    }
}

export default NewClient