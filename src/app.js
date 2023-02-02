const express = require('express');
require('express-async-errors');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const errorMiddleware = require('./middlewares/error');

// ...

const app = express();

app.use(express.json());

app.use(loginRoute);
app.use(userRoute);
app.use(categoryRoute);

app.use(errorMiddleware);

// ...

// É importantee exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
