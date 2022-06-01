const { uppercase } = require('./script5')

it('Testa letras maiúsculas', (done) => {
  uppercase('casa', (call) => {
  expect((call)).toBe('CASA');
  done();
  })
});