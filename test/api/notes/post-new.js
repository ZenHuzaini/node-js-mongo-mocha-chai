// const expect = require('chai').expect
// const request = require('supertest')

// const app = require('../../../app')
// const connection = require('../../../db/index')

// describe('this is from post', () => {
//     before((done) => {
//         connection.connect()
//             .then((result) => {
//                 done()
//             }).catch((err) => {
//                 done(err)
//             });
//     })

//     after((done) => {
//         connection.close()
//             .then((result) => {
//                 done()
//             }).catch((err) => {
//                 done(err)
//             });
//     })

//     it('ok creating new network', (done) => {
//         expect('hello').to.be.equal('hello')
//         done()
//     })

//     it('create post successful ', (done) => {
//         request(app).post('/notes')
//             .send({ name: 'note name', text: 'aa' })
//             .then((result) => {
//                 const body = result.body
//                 expect(body).to.contain.property('_id')
//                 expect(body).to.contain.property('name')
//                 expect(body).to.contain.property('text')
//                 done()
//             }).catch((err) => {
//                 done(err)
//             })
//     })

//     it('name must not be null', (done) => {
//         request(app).post('/notes')
//             .send({ text: 'somehing, it must fail' })
//             .then((result) => {
//                 const testResult = result.error.status
//                 expect(testResult).to.be.equal(400)
//                 done()
//             }).catch((err) => {
//                 done(err)
//             });
//     })

//     //TEXT MUST NOT BE NULL
//     it('text must not be null', (done) => {
//         request(app).post('/notes')
//             .send({ name: 'somehing, it must fail' })
//             .then((result) => {
//                 const testResult = result.error.status
//                 expect(testResult).to.be.equal(400)
//                 done()
//             }).catch((err) => {
//                 done(err)
//             });
//     })

//     it('there musnt be empty', (done) => {
//         request(app).post('/notes')
//             .send({})
//             .then((result) => {
//                 const errorName = JSON.parse(result.error.text).errors
//                 expect(errorName.name.name).to.be.equal('ValidatorError')
//                 expect(errorName.text.name).to.be.equal('ValidatorError')
//                 done()
//             }).catch((err) => {
//                 // console.log(err)
//                 done()
//             });
//     })

// })