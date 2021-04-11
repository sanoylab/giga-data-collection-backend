const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require('./db/connection');
require('dotenv').config();
const PORT = process.env.PORT;
const errors = require('./error-middleware');

const router =  require('./routers/index');
const app = express();
app.use(cors());
app.use(express.json());
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Giga Data Collection Portal (GDCP) - Backend API",
        description:
          "A year ago, UNICEF, in partnership with ITU, launched an initiative called Giga that aims to connect every school to the Internet, and every young person to information, opportunity and choice. Please visit the following website and articles for more information",
        termsOfService: "https://gigaconnect.org/about/",
        contact: {
          name: "API Support",
          url: "https://gigaconnect.org/join-us/",
          email: "expertsanoy@gmail.com",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
        version: "1.0.1",
        servers: ["http://localhost:3000"],
      },
      servers: [
        {
            url: "https://giga-data-collection-backend.herokuapp.com/",
        },
    ],
    },
    apis: ["src/routers/*.js"],
  };
app.use("/api/v1", router);
const swaggerSpec = swaggerJsDoc(options);




app.use("/api/v1", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errors.notFound);
app.use(errors.errorHandler);
app.listen(PORT, ()=>{
    console.log(`Server is started on PORT: ${PORT}`)
});