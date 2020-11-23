const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/vetifly', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongoose connected successfully');
  })
  .catch((err) => {
    console.log('mongoose connection error', err);
  });

let vetiflyDataSchema = mongoose.Schema({
  customer: { type: String },
  captain: { type: String },
  placeFrom: { type: String },
  placeTo: { type: String },
  date: { type: String },
  timeFrom: { type: String },
  timeTo: { type: String },
  pay: { type: Number },
  incomeForCaptin: { type: Number },
  incomeForCo: { type: Number },
});

let vetiflyModel = mongoose.model('vetifly', vetiflyDataSchema);

//module.exports.vetiflyModel = vetiflyModel;

// let vetiflyDoc = new vetiflyModel({
//   customer: 'ahmed',
//   captain: 'saed',
//   placeFrom: 'gaza',
//   placeTo: 'jerusalem',
//   date: 20 / 20 / 2020,
//   timeFrom: '20:00',
//   timeTo: '24:00',
//   pay: 500,
//   incomeForCaptin: 200,
//   incomeForCo: 300,
// });

// vetiflyDoc.save((err) => {
//   if (err) {
//     console.log('error is saving data to db', err);
//   } else {
//     console.log('vetiflyDoc saved in db');
//   }
// });
module.exports.vetiflyModel = vetiflyModel;
