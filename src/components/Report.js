import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    //console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { date } = this.state;
    axios
      .get(`/report/${date}`)
      .then((result) => {
        console.log(result.data);
        result.data.forEach(function (item) {
          $('tbody').append(
            '<tr><td>' +
              item.customer +
              '</td><td>' +
              item.captain +
              '</td><td>' +
              item.placeFrom +
              '</td><td>' +
              item.placeTo +
              '</td><td>' +
              item.date +
              '</td><td>' +
              item.timeFrom +
              '</td><td>' +
              item.timeTo +
              '</td><td>' +
              item.pay +
              '</td><td>' +
              item.incomeForCaptin +
              '</td><td>' +
              item.incomeForCo +
              '</td></tr>'
          );
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <div>
        <h1>Report data</h1>
        <h3>dd-mm-yyyy</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>date</label>
          <br />
          <input
            type='text'
            id='date'
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button id='Report'>Report</button>
          <table>
            <thead>
              <tr>
                <th>customer .....</th>
                <th>captain .....</th>
                <th>placeFrom .....</th>
                <th>placeTo .....</th>
                <th>date .....</th>
                <th>timeFrom..... </th>
                <th>timeTo..... </th>
                <th>pay .....</th>
                <th>incomeForCaptin .....</th>
                <th>incomeForCo..... </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <hr />
        </form>
      </div>
    );
  }
}

export default Report;

// for (var i = 0; i < result.data.length; i++) {
//     $('#1').text(result.data[i].customer);
//     $('#2').text(result.data[i].captain);
//     $('#3').text(result.data[i].placeFrom);
//     $('#4').text(result.data[i].placeTo);
//     $('#5').text(result.data[i].date);
//     $('#6').text(result.data[i].timeFrom);
//     $('#7').text(result.data[i].timeTo);
//     $('#8').text(result.data[i].pay);
//     $('#9').text(result.data[i].incomeForCaptin);
//     $('#10').text(result.data[i].incomeForCo);
//   }
