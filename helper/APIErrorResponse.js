const { GraphQLError } = require("graphql");

const codeMap = {
  500: "INTERNAL_SERVER_ERROR",
  400: "BAD_USER_INPUT ",
  401: "UNAUTHORIZED ",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
};

class APIErrorResponse extends GraphQLError {
  constructor(code = 500, message = "") {
    super(message);
    this.extensions = {
      statusCode: code || 500,
      code: codeMap[code] || codeMap[500],
    };
  }
}

module.exports = APIErrorResponse;
