const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const detailCarModule = require('../modules/detailCar/detailCar.module');
const filterCarModule = require('../modules/filterCar/filterCar.module');
const searchCarModule = require('../modules/searchCar/searchCar.module');
const insertCondition= require('../modules/insertCondition/insertCondition.module');
const insertInsurance= require('../modules/InsertInsurance/InsertedInsurance.module');
const insurance = require('../modules/insurance/insurance.module'); 

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//RUTAS DEFINIDAS

app.use('/detailCar', detailCarModule.controller);
app.use('/filterCar', filterCarModule.controller);
app.use('/searchCar', searchCarModule.controller);
app.use('/insertCondition', insertCondition.controller);
app.use('/insertedInsurance', insertInsurance.controller);
app.use('/insurance', insurance.controller);

module.exports = app;