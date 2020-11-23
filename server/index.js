const db = require('../db/index.js');
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

const vetiflyModel = db.vetiflyModel;

app.post('/vetifly', (req, res) => {
  const {
    customer,
    captain,
    placeFrom,
    placeTo,
    date,
    timeFrom,
    timeTo,
    pay,
  } = req.body;

  let incomeForCaptin = pay * 0.2;
  let incomeForCo = pay * 0.8;

  const dataDoc = new vetiflyModel({
    customer,
    captain,
    placeFrom,
    placeTo,
    date,
    timeFrom,
    timeTo,
    pay,
    incomeForCaptin,
    incomeForCo,
  });
  //console.log('this is data doc ---->', dataDoc);
  dataDoc
    .save()
    .then((result) => {
      res.send('data saved!!!!');
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/report/:date', (req, res) => {
  const { date } = req.params;
  console.log(date);
  vetiflyModel

    .find({ date: date })
    .then((result) => {
      res.send(result);
    })

    .catch((err) => res.send('-------->', err));
});

app.listen(PORT, () => console.log(`listening on posrt: ${PORT}`));
