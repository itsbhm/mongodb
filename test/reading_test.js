const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let shubham;

    beforeEach((done) => {
        shubham = new User({
            name: 'Shubham'
        });

        shubham.save()
            .then(() => done());

    });

    it('Find all the users with a name of Shubham', () => {
        User.find({
            name: 'Shubham'
        })
            .then((users) => {
                // console.log(users);
                assert(users[0]._id.toString() === shubham._id.toString());
                done();
            });
    });

    it('Find a user with a particular id', (done) => {
        User.findOne({
            _id: shubham._id
        })
            .then((user) => {
                assert(user.name === 'Shubham');
                done();
            });
    });
});