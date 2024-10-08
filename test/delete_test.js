const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let shubham;

    beforeEach((done) => {
        shubham = new User({ name: 'Shubham' });
        shubham.save().then(() => done());
    });

    it('model instance remove', (done) => {
        shubham
            .deleteOne()
            .then(() => User.findOne({ name: 'Shubham' }))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method remove', (done) => {
        // Remove a bunch of records with some given criteria
        User.deleteOne({
            name: 'Shubham'
        })
        .then(() =>
            User.findOne({name: 'Shubham'}))
        .then((user) => {
            assert(user === null);
            done();
        });
    });

    it('class method findAndRemove', (done) => {
        User.findOneAndDelete({name: 'Shubham'})
        .then(() =>
            User.findOne({name: 'Shubham'}))
        .then((user) => {
            assert(user === null);
            done();
        });
     });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndDelete(shubham._id)
        .then(() =>
            User.findOne({name: 'Shubham'}))
        .then((user) => {
            assert(user === null);
            done();
        });
     });
});
