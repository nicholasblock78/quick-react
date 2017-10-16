import React from 'react';
import './App.css';
import {apiData} from './data'
import {FirstComponent} from './FirstComponent';

class App extends React.Component {
  // colorDate(d) {
  //   if (todaysDate < d.toString()) {
  //     const colorStatus = 'background-color: green'
  //   } else {
  //     const colorStatus = 'background-color: red'
  //   }
  // }
  formatTime() {
    console.log()
  }
    render() {
      // console.log(this.props)
      return (
      <div className="App">
      <h1>Status of B2C Imports</h1>
        <div className="data">
        <FirstComponent data={apiData}/>
        </div>
      </div>
    );
  }
}

export default App;
