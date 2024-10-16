'use strict';

const Hapi = require('@hapi/hapi');

const mathServer = ({ mathBasic }) => {
  const server = Hapi.server({
    host: 'localhost',
    port: 5000
  });

  server.route([
    {
      method: 'GET',
      path: '/add/{a}/{b}',
      handler: (req) => {
        const { a, b } = req.params;
        const value = mathBasic.add(Number(a), Number(b));

        return { value };
      }
    }
  ]);

  return server;
};

module.exports = mathServer;
