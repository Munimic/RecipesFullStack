const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Recipes',
        description: 'Recipes collection'
    },
    host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ["../scripts/app.js"];


swaggerAutogen(outputFile, routes, doc);