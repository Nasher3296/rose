const express = require('express');
const {database, port} = require('./config');
const routes = require('./routes');
const morgan = require('morgan');
const path = require('path');
const {create} = require('express-handlebars');

// Initializations
const app = express();

// Settings
app.set('port', port);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    // helpers: require("./lib/handlebars"),
  }).engine
);
app.set("view engine", ".hbs");


// Middlewares
app.use(morgan('dev'));

// Routes
app.use(routes);


module.exports = app;