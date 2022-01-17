import request from 'supertest'
const app = require('../../src/config/app')
    
describe('Should respond in the 3001 PORT', () => {
  it('Should call server and return 200', async () => {
    await request(app).get('/').expect(200)
  })
})
