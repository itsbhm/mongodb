const assert = require('assert');
const User = require('../src/user');

describe('Creating Records..', () => {
    it('Saves a user', (done) => {
        const shubham = new User({
            name: 'Shubham'
        });

        shubham.save()
            .then(() => {
                // Has shubham been saved?
                assert(!shubham.isNew);
                done();
            });
    });
});