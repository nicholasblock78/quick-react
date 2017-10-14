import React from 'react'
// import ReactDOM from 'react-dom'
// import {apiData} from './data'
// console.log(dataAPI)
// const dataAPI = fetch("http://readservices-b2c-etl.powerreviews.com/status/imports.json")
// console.log(apiData[0])
// {console.log(this.props.data[0].merchant_group_id)}
export class FirstComponent extends React.Component {
  render() {
    console.log(this.props.data[0])
    return (
      <div>
        <ul>
            {this.props.data.map(function(value) {
              return <li key={value.merchant_group_id}>{value.time}</li>
            })}
        </ul>
        <h1>hello world</h1>
      </div>
    )
  }
}
