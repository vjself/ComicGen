const userFuncs = require('./userController');
const testDB = require('../test/init')

describe('Integration Tests', () => {
    let db;
    function clearDB(){
        return db.find_users('delete from users')
        
    }
    beforeAll(()=> {
        return testDB.initDb().then(database => {
            return db = database;
        })
    })
    afterAll(() => {
        clearDB()
    })
    describe('Register function', () => {
        it('Should store a user in the db and send it back', () => {
            const users = {
                id: 1,
                email: 'bacon@hungry.com',
                username: 'Mike',
                password: '12345',
                f_name: 'Porky',
                l_name: 'the Pig',
                social: 123456789,
                mom_m: 'Ms. Porky',
                age: 20,
                gender: "m",
                profile_pic: 'prof pic'
            }
            return userFuncs.register(db, users).then(createdUser => {
                expect(createdUser.length).not.toEqual(0);
                expect(createdUser[0]).toMatchObject({
                    id: expect.any(Number),
                    email: expect.any(String),
                    username: expect.any(String),
                    password:expect.any(String),
                    f_name: expect.any(String),
                    l_name: expect.any(String),
                    social: expect.any(Number),
                    mom_m: expect.any(String),
                    age: expect.any(Number),
                    gender: expect.any(String),
                    profile_pic: expect.any(String)
                    
                    
                })
            })
        })
    })
})