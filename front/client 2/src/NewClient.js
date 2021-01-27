import React from 'react'

class NewClient extends React.Component {
    constructor(props) {
        super(props);
        this.changeClient = this.changeClient.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        this.state = {name: '', phone: ''};
    }

    changeClient(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    clickAdd() {
        this.props.onAddClient(this.state);
        this.setState({
            name: '',
            phone:''
        })
    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="name" value={this.state.name} onChange={this.changeClient}/></td>
                <td><input className="form-control" name="phone" value={this.state.phone} onChange={this.changeClient}/></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Client</button> </td>
            </tr>   
        );
    }
}

export default NewClient