'use strict';

const app = require('../../app.js');
const converter = require('../../func2Internal');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests func2', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("temp: 212");
    });


    it('test tuc', async () => {

        expect(converter.tuc()).to.be.equal("temp: 212");
    });
});
