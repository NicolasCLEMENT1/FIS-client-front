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
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState) => ({
            client: {...prevState.client, [name]: value}
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
                    <td>{this.state.client.name}</td>
                    <td>{this.state.client.phone}</td>
                    <td>
                        <button className="btn btn-primary" onClick={this.handleEdit}>Edit</button>
                        <button className="btn btn-primary" onClick={this.handleDelete}>Delete</button>
                    </td>
                </tr>;
        } else {
            content = 
                <tr>
                    <td><input className="form-control" name="name" value={this.state.client.name} onChange={this.handleChange}/></td>
                    <td><input className="form-control" name="phone" value={this.state.client.phone} onChange={this.handleChange}/></td>
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