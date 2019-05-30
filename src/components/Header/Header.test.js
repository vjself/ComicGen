const sinon = require('sinon');
const axios = require('axios');
const testFuncs = require ('./testFuncs')

describe('Unit Test', () => {
    describe('Login function', () => {
        it ('Should send a username and password', () => {
            sinon.stub(axios, "post").withArgs(
                sinon.match({
                    username: expect.any(String),
                    password: expect.any(String)
                })
            )
            return testFuncs.testLogin('Mike', 12345)
        })
        afterEach(()=>{
            axios.post.restore()
        })
    })
})