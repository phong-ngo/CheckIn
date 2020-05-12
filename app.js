import 'dotenv/config';

import express from 'express';
import { connectDb } from './models';
import routes from './routes';
import database from './configs/database'

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const swaggerDoc = require('./configs/swaggerDoc');
const app = express();
const eraseDatabaseOnSync = true;

swaggerDoc(app)
database(app)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/users', routes.user);
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);