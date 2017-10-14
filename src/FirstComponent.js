import React from 'react'
// import Time from 'react-time'
// import ReactDOM from 'react-dom'
// import {apiData} from './data'
// console.log(dataAPI)
// const dataAPI = fetch("http://readservices-b2c-etl.powerreviews.com/status/imports.json")
// console.log(apiData[0])
// {console.log(this.props.data[0].merchant_group_id)}
const todaysDate = "2017-10-14";
export class FirstComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {color: 'green'};
  }

  // colorDate(d) {
  //   if (todaysDate < d.toString()) {
  //     const colorStatus = 'background-color: green'
  //   } else {
  //     const colorStatus = 'background-color: red'
  //   }
  // }


  render() {
    const styling = {
      backgroundColor: this.state.color
    };
    console.log(this.props.data[0])
    return (
      <div>
        <div>
        <h1>Todays date</h1>
        <p>2017-10-14</p>
        </div>
            {this.props.data.map(function(value) {
              return <ul key={value.merchant_group_id}>
                <li>Merchant group: {value.merchant_group_id}</li>

                <li style={styling}>Last updated: {(value.time.substring(0,10))}</li>
              </ul>
            })}
        <h1>hello world</h1>
      </div>
    )
  }
}
