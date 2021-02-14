const Client = require('../clients');
const mongoose = require('mongoose');
const dbConnect = require('../db');

describe('Clients database connection', () => {
    beforeAll(() => {
        return dbConnect();
    })

    beforeEach((done) => {
        Client.deleteMany({}, (err) => {
            done();
        });
    });

    it('writes a client in the database', (done) => {
        const client = new Client({"username": "nicocle",
        "password":"wordpass",
        "firstName":"Nicolas",
        "lastName":"Clement",
        "address":"address",
        "email":"mail@mail.com",
        "phone":"606060606"
    });
        client.save((err, client) => {
            expect(err).toBeNull();
            Client.find({}, (err, clients) => {
                expect(clients).toBeArrayOfSize(1);
                done();
            });
        });
    });

    afterAll((done) => {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done);
        });
    });

})