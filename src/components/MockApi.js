export default class MockApi {
    constructor(defaultUsers = [], latency = 500) {
        this.defaultUsers = defaultUsers;
        this.latency = latency;
        this.setUsers(defaultUsers);
    }

    getAllUsers() {
        let users = JSON.parse(localStorage.getItem('mockApiUsers'));
        if (!Array.isArray(users)) {
            users = Array(users);
        }
        return users;
    }

    setUsers(users) {
        if (!Array.isArray(users)) {
            users = Array(users);
        }
        return localStorage.setItem('mockApiUsers', JSON.stringify(users));
    }

    signInUser(username, password) {
        return new Promise(resolve => {
            setTimeout(() => {
                let apiUsers = [];
                apiUsers = this.getAllUsers();
                let user = apiUsers.find((user) => user.username === username);
                if (user) {
                    resolve({ error: true, message: 'There is a user who have same credentials' });
                } else {
                    apiUsers.push({ username, password });
                    this.setUsers(apiUsers);
                    resolve({ error: false });
                }
            }, this.latency);
        });
    }

    authenticate(username, password) {
        let users = this.getAllUsers();
        if (users.length === 0) {
            throw new Error('Empty User Store');
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                users = this.getAllUsers();
                let user = users.find((user) => user.username === username && user.password === password);
                if (user) {
                    resolve({ error: false, data: users });
                } else {
                    resolve({ error: true, data: 'Invalid User Credentials' });
                }
            }, this.latency);
        });
    }

    checkAuthenticate() {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const users = this.getAllUsers();
        let user = users.find((user) => user.username === email && user.password === password);

        if (user) {
            return true;
        }

        return false;
    }
}

