const axios = require('axios');

module.exports = {
    testLogin: (username, password) => {
        axios.post('/api/login', {username, password})
    },
    testRegistration: (email, username, password, f_name, l_name, social, mom_m, age, gender, profile_pic) => {
        axios.post('/api/register', {email, username, password, f_name, l_name, social, mom_m, age, gender, profile_pic})
    },
    testLogout: (username, password) => {
        axios.post('/api/logout', {username, password})
    }
}