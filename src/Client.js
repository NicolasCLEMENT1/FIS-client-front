import React from 'react';

class Client extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            client: props.client,
            isEditing: false
        }
    }

    handleEdit() {
        this.setState({
            isEditing: true
        });
    }

    handleDelete() {
        this.props.onDelete(this.state.client);
    }

    handleCancel() {
        this.setState((prevState,props) => ({
            isEditing: false,
            client: props.client
        }));
    }

    handleChange(event) {
        const username = event.target.username;
        const value = event.target.value;
        this.setState((prevState) => ({
            client: {...prevState.client, [username]: value}
        }));
    }

    handleSave() {
        this.setState({
            isEditing: false
        });
        this.props.onEdit(this.state.client);
    }



    render() {
        let content;
        if(! this.state.isEditing) {
            content = 
                <tr>
                    <td>{this.state.client.username}</td>
                    <td>{this.state.client.password}</td>
                    <td>{this.state.client.firstName}</td>
                    <td>{this.state.client.lastName}</td>
                    <td>{this.state.client.address}</td>
                    <td>{this.state.client.email}</td>
                    <td>{this.state.client.phone}</td>
                    <td>
                        <button className="btn btn-primary" onClick={this.handleEdit}>Edit</button>
                        <button className="btn btn-primary" onClick={this.handleDelete}>Delete</button>
                    </td>
                </tr>;
        } else {
            content = 
                <tr>
                    <td><input className="form-control" type="text" name="username" value={this.state.client.username} onChange={this.handleChange} placeholder="Username"/></td>
                    <td><input className="form-control" type="text" name="password" value={this.state.client.password} onChange={this.handleChange} placeholder="Password"/></td>
                    <td><input className="form-control" type="text" name="firstName" value={this.state.client.firstName} onChange={this.handleChange} placeholder="First Name"/></td>
                    <td><input className="form-control" type="text" name="lastName" value={this.state.client.lastName} onChange={this.handleChange} placeholder="Last Name"/></td>
                    <td><input className="form-control" type="text" name="address" value={this.state.client.address} onChange={this.handleChange} placeholder="Address"/></td>
                    <td><input className="form-control" type="text" name="email" value={this.state.client.email} onChange={this.handleChange} placeholder="Email"/></td>
                    <td><input className="form-control" type="text" name="phone" value={this.state.client.phone} onChange={this.handleChange} placeholder="Phone"/></td>
                    <td>
                        <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
                        <button className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                    </td>
                </tr>    
            ;
            
        }
        return content;
    }
}


export default Client;