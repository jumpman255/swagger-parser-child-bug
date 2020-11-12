const express = require('express');
const swaggerUI = require('swagger-ui-express');
const SwaggerParser = require('@apidevtools/swagger-parser');

const app = express();

const options = {
  resolve: {
    external: true,
    file: {
      canRead: true
    }
  }
};

try {
  SwaggerParser.validate('./openapi/index.yaml', options).then(api => {
    app.use('/', swaggerUI.serve, swaggerUI.setup(api));
  });
} catch (error) {
  console.log(error);
}

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:9000`);
});