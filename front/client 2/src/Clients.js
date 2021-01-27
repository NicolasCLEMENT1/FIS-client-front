import React from 'react';
import Client from './Client.js';
import NewClient from './NewClient.js';
import Alert from './Alert.js';
import ClientApi from './clientApi.js';

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.newClient = this.newClient.bind(this);
        this.handleErrorClick = this.handleErrorClick.bind(this);
        this.state = {
            errorInfo: null,
            selectedClient: null,
            clients: []
        };
    }

    componentDidMount() {
        this.fetchClients();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth) {
            this.fetchClients();
        }
    }

    fetchClients() {
        if (this.props.auth) {
            ClientApi.getAllClients(this.props.auth.token)
            .then(
                (result) => {
                    this.setState({
                        clients: result
                    });
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection"
                    })
                }
            )    
        } else {
            this.setState({
                clients: []
            })
        }

    }

    handleEdit(client) {
        this.setState(prevState => {
            const clients = prevState.clients;
            const pos = clients.findIndex(c => c.username === client.username);
            return {
                clients: [...clients.slice(0,pos), Object.assign({}, client), ...clients.slice(pos+1)],
                selectedClient: this.context.token
            }
        })
    }

    handleErrorClick() {
        this.setState({
            errorInfo: null
        });
    }

    handleDelete(client) {
        this.setState(prevState => {
            const clients = prevState.clients;
            const pos = clients.findIndex(c => c.username === client.username);
            return {
                clients: [...clients.slice(0,pos), ...clients.slice(pos+1)],
            }
        });
    }

    newClient(client) {
        this.setState(prevState => {
            const clients = prevState.clients;
            if (! clients.find(c => c.username === client.username)) {
                return ({
                    clients: [...prevState.clients, client]
                });
            }

            return {
                errorInfo: 'Client already exists'
            };
        });
    }

    render() {
        const selectedClient = this.state.selectedClient;
        const displayClient = selectedClient ? <div className="alert alert-primary">{selectedClient.username}</div> : ''

        return (
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleErrorClick}/>
                {displayClient}
                {this.context ? this.context.token : null}

                <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <NewClient onAddClient={this.newClient}/>
                {this.state.clients.map((client) => 
                    <Client client={client} onDelete={this.handleDelete} onEdit={this.handleEdit} key={client.username} />
                )}
                </table>
            </div>
        );
    }
}


export default Clients