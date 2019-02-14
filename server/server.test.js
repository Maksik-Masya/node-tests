const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    describe('Get /', () => {
        it('should return page not found response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('Get /users', () => {
        it('should return response with users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Name2',
                        age: 21
                    }).toBeAn('object')
                })
                .end(done);
        });
    });
});
