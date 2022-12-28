const app = require('../../prod/app');
const request = require('supertest');
const baseURL = 'http://localhost:4900';

describe('Testing if app works', () => {

    beforeAll(done => {
        done()
      })


    it("req.statusCode should return 200", async () => {
        const response = await request(baseURL).get("/");
        expect(response.statusCode).toBe(200);
        done()
    });
    it("req.text should return 'Hola mundo'", async () => {
        const response = await request(baseURL).get("/");
        expect(response.text).toStrictEqual("hola mundo")
        done()
    })

    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
      })
})