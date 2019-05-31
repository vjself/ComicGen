const {init} = require('./init');
const testUsers = require('./testUsers');

describe('integration testing', () => {
    let db;
    
    beforeAll(() => {
        return initDb.initDb().then(theDB => {
            return (db = theDB)
        })
    })
    afterAll(() => {
        clearDb()
    })

    describe("Add a user", () => {
        it("Should create a new user", () => {
            return testUsers.create(db, {
                email: "email",
                username: "username",
                password: "password",
                f_name: "f_name",
                l_name: "l_name",
                social: "social",
                mom_m: "mom_m",
                age: "age",
                gender: "gender",
                profile_pic: "profile_pic"
            }).then(newUsers => {
                expect(newUsers.email).toEqual("email")
                expect(newUsers.username).toEqual("username")
                expect(newUsers.password).toEqual("password")
                expect(newUsers.f_name).toEqual("f_name")
                expect(newUsers.l_name).toEqual("l_name")
                expect(newUsers.social).toEqual("social")
                expect(newUsers.mom_m).toEqual("mom_m")
                expect(newUsers.age).toEqual("age")
                expect(newUsers.gender).toEqual("gender")
                expect(newUsers.profile_pic).toEqual("profile_pic")
            })
        })
    })
})