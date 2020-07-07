const openApiDocumentation = {
  swagger: "3.0",
  openapi: "3.0.1",
  info: {
    title: " Dockerized User Management Micro-Service",
    description: "A Dockerized Microservice for User Management",
    contact: {
      name: "User APIs",
    },
  },
  server: [
    {
      url: "http:localhost:5000",
      description: "Local Server",
    },
  ],
  tags: [
    {
      name: "API Auth",
    },
    {
      name: "CRUD Operations",
    },
    {
      name: "Company CRUD Operations",
    },
  ],
  security: {
    bearerAuth: {},
  },
  paths: {
    "/v1/addServiceUser": {
      post: {
        tags: ["API Auth"],
        description: "Add Service User",
        operationId: "addServiceUser",
        security: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ServiceUser",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    
    "/v1/token": {
      get: {
        tags: ["API Auth"],
        description: "Generate Token",
        operationId: "generateToken",
        security: [],
        parameters: [
          {
            name: "email",
            in: "query",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/me": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get ServiceUser Account",
        operationId: "getSelf",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["CRUD Operations"],
        description: "Delete ServiceUser Account",
        operationId: "deleteSelf",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    
    "/v1/users": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get All Users",
        operationId: "getUsers",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["CRUD Operations"],
        description: "Add new User",
        operationId: "addUser",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}": {
      delete: {
        tags: ["CRUD Operations"],
        description: "Delete User",
        operationId: "deleteUser",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      get: {
        tags: ["CRUD Operations"],
        description: "Get a User",
        operationId: "getUser",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/firstName": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User First Name",
        operationId: "getUserFirstName",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User First Name",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserFirstName",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/lastName": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Last Name",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserLastName",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Last Name",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserLastName",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/level": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get Users level",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserLevel",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Level",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserLevel",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/email": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User email",
        operationId: "getUserEmail",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Email",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserEmail",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/phone": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Phone",
        operationId: "getUserPhone",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Phone",
        operationId: "setUserPhone",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/age": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Age",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserAge",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Age",
        operationId: "setUserAge",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/status": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Status",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserStatus",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Status",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserStatus",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/gender": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Gender",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserGender",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Gender",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserGender",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/avatar": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Avatar",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserAvatar",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "Buffer",
            },
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Avatar",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserAvatar",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "Buffer",
            },
            
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["CRUD Operations"],
        description: "Delete user Avatar",
        operationId: "removeUserAvatar",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "Buffer",
            },
            
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/{id}/address": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get User Address",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getUserAddress",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["CRUD Operations"],
        description: "Set User Address",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "setUserAddress",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/status/active": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get Active User Status",
        security: [
          {
            bearerAuth: {},
          },
        ],
        operationId: "getActiveUsers",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/status/inactive": {
      get: {
        tags: ["CRUD Operations"],
        description: "Get Status of inActive Users",
        operationId: "getInActiveUsers",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/activate/{id}": {
      put: {
        tags: ["CRUD Operations"],
        description: "Activate a user",
        operationId: "activateUsers",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/deactivate/{id}": {
      put: {
        tags: ["CRUD Operations"],
        description: "Deactivate a user",
        operationId: "deActivateUsers",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/sms/{id}": {
      put: {
        tags: ["CRUD Operations"],
        description: "Send OTP to registered phonenumber",
        operationId: "sendOtpSms",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/changephone/{id}": {
      patch: {
        tags: ["CRUD Operations"],
        description: "use OTP to change phone number",
        operationId: " changePhoneWithSms",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/email/{id}": {
      put: {
        tags: ["CRUD Operations"],
        description: "send OTP to registered email address",
        operationId: " sendOtpEmail",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/users/changeemail/{id}": {
      patch: {
        tags: ["CRUD Operations"],
        description: "use OTP to change email address",
        operationId: " changeEmail",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies": {
      post: {
        tags: ["Company CRUD Operations"],
        description: "Create New Company",
        operationId: "createNewCompany",
        security: [
          {
            bearerAuth: {},
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Company",
              },
            },
          },
          required: true,
        },
        parameters: [],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get All Companies",
        operationId: "getAllCompanies",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/{id}": {
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get A Company By Id",
        operationId: "getCompanyById",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Company CRUD Operations"],
          description: "Update Company Info",
          operationId: "setCompanyInfoCompanyById",
          security: [{
            bearerAuth: {},
          }, ],
          parameters: [{
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          }, ],
          responses: {
            "200": {
              description: "Success",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Response",
                  },
                },
              },
            },
            "400": {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Response",
                  },
                },
              },
            },
          },
      }
    },
    "/v1/companies/{id}/users": {
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get A Company Users",
        operationId: "getCompanyUsers",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "v1/companies/{id}/teams": {
      post: {
        tags: ["Company CRUD Operations"],
        description: "Create New Team",
        operationId: "createNewTeam",
        security: [
          {
            bearerAuth: {},
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Team",
              },
            },
          },
          required: true,
        },
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/teams/{teamId}/users/{userId}": {
      post: {
        tags: ["Company CRUD Operations"],
        description: "Add User to A Team",
        operationId: "addUserToTeam",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "teamId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "userId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1//companies/team/invite/{userId}/{teamId}/{invitedUserId}": {
      post: {
        tags: ["Company CRUD Operations"],
        description: "Invite a user to a team",
        operationId: "inviteUserToTeam",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "userId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "teamId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "invitedUserId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/invite//:userId/:companyId/:invitedUserId": {
      post: {
        tags: ["Company CRUD Operations"],
        description: "Invite a user to a Company",
        operationId: "inviteUserToCompany",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "userId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "companyId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "invitedUserId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/teams/{id}/users": {
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get Team Members",
        operationId: "getTeamMembers",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/{id}/teams": {
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get Teams Under A Company",
        operationId: "getCompanyTeams",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/teams/users/{id}": {
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get A User's Team",
        operationId: "getUsersTeam",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/user/{id}": {
      get: {
        tags: ["Company CRUD Operations"],
        description: "Get A User's Company",
        operationId: "getUsersCompany",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/{companyId}/users/{userId}": {
      post: {
        tags: ["Company CRUD Operations"],
        description: "Add User to A Company",
        operationId: "addUserToCompany",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "companyId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "userId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/v1/companies/teams/{teamId}/users/{userId}": {
      delete: {
        tags: ["Company CRUD Operations"],
        description: "Remove User from a Team",
        operationId: "removeUserFromTeam",

        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "teamId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "userId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/companies/{companyId}/teams/{teamId}": {
      delete: {
        tags: ["Company CRUD Operations"],
        description: "Remove Team from a Company",
        operationId: "removeTeamFromCompany",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "companyId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "teamId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
    "/companies/{companyId}/remove/users/{userId}": {
      delete: {
        tags: ["Company CRUD Operations"],
        description: "Remove User from a Company",
        operationId: "removeUserFromCompany",
        security: [
          {
            bearerAuth: {},
          },
        ],
        parameters: [
          {
            name: "companyId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "userId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
          "400": {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Response",
                },
              },
            },
          },
        },
      },
    },
  },

  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "User First Name",
          },
          lastName: {
            type: "string",
            description: "User Last Name",
          },
          email: {
            type: "string",
            description: "User Email Address",
          },
          phone: {
            type: "string",
            description: "User Phone Number",
          },
          age: {
            type: "integer",
            description: "User Age",
          },
          gender: {
            type: "string",
            enum: ["MALE", "FEMALE"],
          },
          address: {
            type: "string",
          },
        },
      },
      Company: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Company Name",
          },
        },
      },
      Team: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "Team Name",
          },
          description:{
            type: "string",
            description: "Team Description"
          },
        },
      },
      Users: {
        type: "array",
        items: {
          $ref: "#/components/schemas/User",
        },
      },
      ServiceUser: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "User Email",
          },
        },
      },
      Response: {
        type: "object",
        properties: {
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
          data: {
            type: "object",
          },
        },
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
      },
    },
  },
};

module.exports = openApiDocumentation;
