const assert = require("assert");
const User = require("../API/models/user.js");

describe('User Test', () => {

    it('Should return the public test user', () => {

        User.getUser("5f1f0c3926b29a5b7865ed41", (err, user)=> {
                
            assert.equal(user, {name:"hola", status:"User"});
        });    
    });
});