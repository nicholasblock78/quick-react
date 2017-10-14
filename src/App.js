import React from 'react';
import logo from './logo.svg';
import './App.css';
import {apiData} from './data'
import {FirstComponent} from './FirstComponent';

const todaysDate = "2017-10-14";
class App extends React.Component {
  // colorDate(d) {
  //   if (todaysDate < d.toString()) {
  //     const colorStatus = 'background-color: green'
  //   } else {
  //     const colorStatus = 'background-color: red'
  //   }
  // }
    render() {
      // console.log(this.props)
      return (


      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstComponent data={apiData}/>
      </div>
    );
  }
}

export default App;
