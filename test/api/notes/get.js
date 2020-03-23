const chai = require('chai').expect
const supertest = require('supertest')
const app = require('../../../app')
const connection = require('../../../db/index')

describe('testing /GET', () => {
    let teardown;
    let server;
    let request;

    before((done) => {
        connection.connect()
            .then((result) => {
                // done()
            }).catch((err) => {
                done(err)
            });

        teardown = app
        // console.log('from teardown ', teardown)
        server = teardown.listen(done)
        console.log('this is server ', server)
        request = supertest.agent(server)
        console.log('from request ', request)
    })

    after((done) => {
        connection.close()
            .then((result) => {
                // done()
            }).catch((err) => {
                done(err)
            });

        server.close(done)
    })

    it('it should not return null', (done) => {
        supertest(server).get('/notes')
            .then((result) => {
                chai(result.body).length.greaterThan(0)
                chai(result.statusCode).to.be.equal(200)
                done()
            }).catch((err) => {
                done(err)
            });
    })

    it('it mut be able to make new note', (done) => {
        supertest(server).post('/notes')
            .send({ name: 'huzaini', text: 'bismillah bisa!' })
            .then((result) => {
                supertest(server).get('/notes')
                    .then((result) => {
                        console.log(result.body)
                        chai(result.body).is.not.null
                        chai(result.statusCode).is.equal(200)
                        done()
                    }).catch((err) => {
                        done(err)
                    });
            }).catch((err) => {
                done(err)
            });
    })
})
