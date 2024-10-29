'use strict';

const appServer = require('./appServer');
const MathBasic = require('./math/MathBasic');
const FigureCalculator = require('./math/FigureCalculator');

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

  describe('when GET /multiply', () => {
    it('should respond status code 200 & returns correct multiplication result', async () => {
      const a = 10;
      const b = 5;

      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = appServer({ mathBasic: MathBasic });

      const res = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(50);
      expect(spyMultiply).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond status code 200 & returns correct division result', async () => {
      const a = 10;
      const b = 5;

      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = appServer({ mathBasic: MathBasic });

      const res = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(2);
      expect(spyDivide).toHaveBeenCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('should respond status code 200 & returns correct rectangle perimeter result', async () => {
      const length = 8;
      const width = 4;

      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = appServer({ figureCalculator });

      const res = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(24);
      expect(spyCalculateRectanglePerimeter).toHaveBeenCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('should respond status code 200 & returns correct rectangle area result', async () => {
      const length = 8;
      const width = 4;

      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = appServer({ figureCalculator });

      const res = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(32);
      expect(spyCalculateRectangleArea).toHaveBeenCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it('should respond status code 200 & returns correct triangle perimeter result', async () => {
      const sideA = 8;
      const sideB = 9;
      const base = 5;

      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = appServer({ figureCalculator });

      const res = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(22);
      expect(spyCalculateTrianglePerimeter).toHaveBeenCalledWith(sideA, sideB, base);
    });
  });

  describe('when GET /triangle/area', () => {
    it('should respond status code 200 & returns correct triangle area result', async () => {
      const base = 8;
      const height = 10;

      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = appServer({ figureCalculator });

      const res = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`
      });

      const resJson = JSON.parse(res.payload);

      expect(res.statusCode).toEqual(200);
      expect(resJson.value).toEqual(40);
      expect(spyCalculateTriangleArea).toHaveBeenCalledWith(base, height);
    });
  });
});
