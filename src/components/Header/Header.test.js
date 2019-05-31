
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

            return testFuncs.testLogin("1", 1 )
        })
        afterEach(() => {
            axios.post.restore()
        })
    })

    describe('Logout function', () => {
        it("Should logout the user and set data to null", () => {
            sinon.stub(axios, "post").withArgs(
                sinon.match({
                    username: null,
                    password: null
                })
            )
            return testFuncs.testLogout(null, null)
        })
        afterEach(() => {
            axios.post.restore()
        })
    })
 
})
