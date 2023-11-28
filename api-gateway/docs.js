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
    },
    "/comment": {
      get: {
        description: "",
        parameters: [
          {
            name: "idBook",
            in: "query",
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "OK"
          }
        }
      },
      post: {
        description: "",
        parameters: [
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                idBook: {
                  example: "any"
                },
                comment: {
                  example: "any"
                }
              }
            }
          }
        ],
        responses: {
          "201": {
            description: "Created"
          }
        }
      }
    },
    "/comment/{id}": {
      get: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "OK"
          }
        }
      },
      put: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string"
          },
          {
            name: "body",
            in: "body",
            schema: {
              type: "object",
              properties: {
                idBook: {
                  example: "any"
                },
                comment: {
                  example: "any"
                }
              }
            }
          }
        ],
        responses: {
          "201": {
            description: "Created"
          }
        }
      },
      delete: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string"
          }
        ],
        responses: {
          "203": {
            description: "Non-Authoritative Information"
          }
        }
      },
      patch: {
        description: "",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            type: "string"
          }
        ],
        responses: {
          "201": {
            description: "Created"
          }
        }
      }
    }
  }
};
