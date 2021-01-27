class LoginApi {

    API_BASE_URL = "/auth";

    static requestHeaders() {
        return {};
    }

    static login(name, password) {
        const headers = this.requestHeaders();
        const request = new Request("/auth/login", {
            method: 'POST',
            headers: headers,
            body: {
                name: name,
                password: password
            }
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

}

export default LoginApi