'use strict';

const mathServer = require('./mathServer');
const MathBasic = require('./math/MathBasic');

describe('An HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond status code 200 & returning correct addition result', async () => {
      const a = 10;
      const b = 20;

      const spyAdd = jest.spyOn(MathBasic, 'add');

      const server = mathServer({ mathBasic: MathBasic });

      const res = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });
});
