const app = require('../../prod/app');
const request = require('supertest');
const baseURL = 'http://localhost:4900';

describe('Testing if app works', () => {
    it("req.statusCode should return 200", async () => {
        const response = await request(baseURL).get("/");
        expect(response.statusCode).toBe(200);
    });
    it("req.text should return 'Hola mundo'", async () => {
        const response = await request(baseURL).get("/");
        expect(response.text).toBe("hola mundo")
    })
})