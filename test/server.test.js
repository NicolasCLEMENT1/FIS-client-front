const app = require('../server.js');
const request = require('supertest');
const Client= require('../clients.js');

describe("First tests", () => {


    it("First stupid test", () => {
        const a = 1;
        const b = 2;
        const sum = a + b;

        expect(sum).toBe(3);
    });

});


describe("Clients API", () => {
    describe("GET /", () => {
        it("Should return an HTML", () => {
            return request(app).get("/").then((response) => {
                expect(response.status).toBe(200);
                expect(response.type).toEqual(expect.stringContaining("html"));
                expect(response.text).toEqual(expect.stringContaining("h1"));
            });
        });
    });

    describe("GET /clients", () => {

        beforeAll(() => {
            const client = [
             new Client     ( {"username": "nicocle",
                    "password":"wordpass",
                    "firstName":"Nicolas",
                    "lastName":"Clement",
                    "address":"address",
                    "email":"mail@mail.com",
                    "phone":"606060606"
                })
            ];

            dbFind = jest.spyOn(Client, "find");
            dbFind.mockImplementation((query, callback) => {
                callback(null, client);
            });
        });

        it("Should return all the clients", () => {
            return request(app).get('/api/v1/clients').then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toBeArrayOfSize(1);
                expect(dbFind).toBeCalledWith({}, expect.any(Function));
            });
        });
    });
    describe('POST /register', () => {
        const client =  {"username": "nicolclem",
        "password":"wordpass2",
        "firstName":"Nicolas",
        "lastName":"Clement",
        "address":"address",
        "email":"mail@mail.com",
        "phone":"606060606"
    };
        let dbInsert;

        beforeEach(() => {
            dbInsert = jest.spyOn(Client, "create");
        });

        it('Should add a new client', () => {
            dbInsert.mockImplementation((c, callback) => {
                callback(false);
            });

            return request(app).post('/api/v1/clients').send(client).then((response) => {
                expect(response.statusCode).toBe(201);
                expect(dbInsert).toBeCalledWith(client, expect.any(Function));
            });
        });

        it('Should return an error 500 if there is a problem with the data base', () => {
            dbInsert.mockImplementation((c, callback) => {
                callback(true);
            });

            return request(app).post('/api/v1/clients').send(client).then((response) => {
                expect(response.statusCode).toBe(500);
            });
        });
    });
});  