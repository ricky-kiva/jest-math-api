'use strict';

const appServer = require('./appServer');
const MathBasic = require('./math/MathBasic');

describe('An HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond status code 200 & returns correct addition result', async () => {
      const a = 10;
      const b = 20;

      const spyAdd = jest.spyOn(MathBasic, 'add');

      const server = appServer({ mathBasic: MathBasic });

      const res = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should respond status code 200 & returns correct subtraction result', async () => {
      const a = 12;
      const b = 8;

      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = appServer({ mathBasic: MathBasic });

      const res = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(4);
      expect(spySubtract).toHaveBeenCalledWith(a, b);
    });
  });
});
