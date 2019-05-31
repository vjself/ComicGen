const sinon = require('sinon');
const axios = require('axios')
const testFuncs = require('../Header/testFuncs')

describe('Unit Test', () => {
    describe('Registration Function', () => {
        it('Should send registration information', () => {
            sinon.stub(axios, "post").withArgs(
                sinon.match({
                    id: expect.any(String),
                    email: expect.any(String),
                    username: expect.any(String),
                    password: expect.any(String),
                    f_name: expect.any(String),
                    l_name: expect.any(String),
                    social: expect.any(String),
                    mom_m: expect.any(String),
                    age: expect.any(String),
                    gender: expect.any(String),
                    profile_pic: expect.any(String),
                    last_logged_in: expect.any(Date)
                })
            )
            return testFuncs.testRegistration('bacon@hungry.com', 'Mike', 12345, 'Porky', 'the pig', 123456789, 'Ms.Porky', 20, 'm', 'prof pic')
        })
        afterEach(() => {
            axios.post.restore()
        })
    })
    
})
