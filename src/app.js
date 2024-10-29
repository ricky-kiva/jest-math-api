'use strict';

const appServer = require('./appServer');
const FigureCalculator = require('./math/FigureCalculator');
const MathBasic = require('./math/MathBasic');

const start = async () => {
  const figureCalculator = new FigureCalculator(MathBasic);
  const server = appServer({
    mathBasic: MathBasic,
    figureCalculator
  });

  await server.start();

  // eslint-disable-next-line no-console
  console.log(`Server is starting at ${server.info.uri}`);
};

start();
