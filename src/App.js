import React from 'react';
import './App.css';
import {apiData1} from './data'
import {FirstComponent} from './FirstComponent';

class App extends React.Component {
  constructor(props) {
    super(props)
    var url = "http://readservices-b2c-etl.powerreviews.com/status/imports.json";
    var myHeaders = new Headers();
    myHeaders.set("Content-Type", "json")
    myHeaders.append("Access-Control-Allow-Origin", "*");
    var myInit = { method: 'GET',
               headers: myHeaders,
               // credentials: 'omit',
               // mode: '*',
               cache: 'default' };

    fetch(url,myInit)
    .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data)
    // Create and append the li's to the ul
    const apiData1 = data;
    })


  }
    render() {
      // console.log(this.props)
      return (
      <div className="App">
      <h1>Status of B2C Imports</h1>
        <div className="data">
        <FirstComponent data={apiData1}/>
        </div>
      </div>
    );
  }
}

export default App;
