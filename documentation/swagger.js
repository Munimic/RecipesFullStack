const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'To-Do-List',
        description: 'The practical API for your new To-Do-List'
    },
    host: 'localhost:3000'
};

const outputFile = '../scripts/swagger-output.json';
const routes = ["../scripts/app.js"];


swaggerAutogen(outputFile, routes, doc);