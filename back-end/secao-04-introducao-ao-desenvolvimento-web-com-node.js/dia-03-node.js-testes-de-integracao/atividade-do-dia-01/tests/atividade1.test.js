const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const app = require('../src/app');

describe('Testes de integração para o endpoint GET /chocolates/total', function() {
  it('Retorna a quantidade total de chocolates', async function () {
    const response = await chai.request(app)
      .get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
});
})