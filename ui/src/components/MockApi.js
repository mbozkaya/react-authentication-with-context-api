class MockApi {
    constructor(defaultUsers = [], latency = 500) {
        this.defaultUsers = defaultUsers;
        this.latency = latency;
        this.setUsers(defaultUsers);
    }

    getAllUsers() {
        return JSON.parse(localStorage.getItem('mockApiUsers'));
    }

    setUsers(users) {
        return localStorage.setItem('mockApiUsers', JSON.stringify(users));
    }

    signInUser(username, password) {
        let apiUsers = [];
        apiUsers = this.getAllUsers();
        apiUsers.push({ username, password });
        this.setUsers(apiUsers);
    }

    authenticate(username, password) {
        let users = Array(this.getAllUsers());
        if (users.length === 0) {
            throw new Error('Empty User Store');
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                users = Array(this.getAllUsers());
                let user = users.find((user) => user.username === username && user.password === password);
                if (user) {
                    resolve({ error: false, data: users });
                } else {
                    reject({ error: true, data: 'Invalid User Credentials' });
                }
            }, this.latency);
        });
    }

    checkAuthenticate() {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const users = Array(this.getAllUsers());
        let user = users.find((user) => user.username === email && user.password === password);
        
        if (user) {
            return true;
        }

        return false;
    }
}

export default MockApi;
