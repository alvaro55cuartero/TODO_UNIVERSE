const assert = require("assert");
const User = require("../API/models/user.js");


describe('User Test', () => {

    it('Should return the public test user by id', (done) => {
        
        User.getPublicUserById("5f1f0c3926b29a5b7865ed41", (err, user)=> {
            
            if (err) { done(err)};

            assert.deepStrictEqual(user, {name:"hola", status:"User"});

            done();
        });
    });

    
    it('Should return the public test user by name', (done) => {
        
        User.getPublicUser({name: "hola"}, (err, user)=> {
            
            if (err) { done(err)};

            assert.deepStrictEqual(user, {name:"hola", status:"User"});

            done();
        });
    });

    it('Should return the private test user by id', (done) => {
        
        User.getPrivateUserById("5f1f0c3926b29a5b7865ed41", (err, user)=> {
            
            if (err) { done(err)};

            assert.deepStrictEqual(user, {name:"hola", status:"User", password: "$2a$10$GJqn0mvrwvzDr0Y0jfxaM.mZHnFoVoCOlkMyFfzCtWK8e6/lCffWC"});

            done();
        });
    });

    
    it('Should return the private test user by name', (done) => {
        
        User.getPrivateUser({name: "hola"}, (err, user)=> {
            
            if (err) { done(err)};

            assert.deepStrictEqual(user, {name:"hola", status:"User", password: "$2a$10$GJqn0mvrwvzDr0Y0jfxaM.mZHnFoVoCOlkMyFfzCtWK8e6/lCffWC"});

            done();
        });
    });
});