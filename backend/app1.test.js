const request = require('supertest');
const app = require('./app1');

describe('GET /', () => {
    it('should return Hello, world!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, world!');
    });
});

describe('POST /login', () => {
    it('should return Login successful with correct credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'test', password: 'test' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Login successful');
    });

    it('should return Login failed with incorrect credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'wrong', password: 'wrong' });
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('message', 'Login failed');
    });
});
