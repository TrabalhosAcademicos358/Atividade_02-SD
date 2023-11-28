import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js', './router.js']

swaggerAutogen(outputFile, endpointsFiles)
