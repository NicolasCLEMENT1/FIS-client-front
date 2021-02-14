class ClientApi {

    static API_BASE_URL = "/api/v1";

    static requestHeaders(token) {
        console.log(token);
        if (token)
            return {
                Authorization: `Bearer ${token}`
            }
            
        return {};
    }

    static getAllClients(token) {
        const headers = this.requestHeaders(token);
        const request = new Request(ClientApi.API_BASE_URL + "/clients", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

}

export default ClientApi