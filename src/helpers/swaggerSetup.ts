import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "API Doc",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:8080/api/`,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },

    schemas: {
      user: {
        type: "object",
        required: [],
        properties: {
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          email: {
            type: "string",
          },
          username: {
            type: "string",
          },
          role: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
        example: {
          firstName: "string",
          lastName: "string",
          email: "string@gmail.com",
          username: "001String",
          role: "operator",
          password: "123456",
        },
      },

      login: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
        example: {
          email: "string@gmail.com",
          password: "123456",
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
