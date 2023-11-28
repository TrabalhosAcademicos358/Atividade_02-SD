export const apiDocs = {
  openapi: "3.1.0",
  info: {
    title: "Atividade_02-API",
    version: "1.0.0",
    description: "Uma api-gateway que une google books + api comment",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: [
    "http"
  ],
  paths: {
    "/livros": {
      get: {
        description: "",
        parameters: [
          {
            name: "authorization",
            in: "header",
            type: "string"
          },
          {
            name: "q",
            in: "query",
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "OK"
          }
        }
      }
    },
    "/livros/{id}": {
      get: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string"
          },
          {
            name: "authorization",
            in: "header",
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "OK"
          }
        }
      }
    }
  }
};
