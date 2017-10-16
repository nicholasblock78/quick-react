import React from 'react'
import Time from './Time'

export class FirstComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {currentDate: new Date(Date.now()).toString(),oldColor: 'rgba(255,0,0,0.5)',staleColor: 'rgba(100,5,5,0.5)',okColor: 'rgba(0,255,0,0.5)'};
    this.formatTime = this.formatTime.bind(this);
  }

  formatTime() {
    console.log()
  }

  componentWillMount() {

  }
  componentDidMount() {
    var url = "http://readservices-b2c-etl.powerreviews.com/status/imports.json";
    var myHeaders = new Headers();
    myHeaders.set("Content-Type", "text/html")
    myHeaders.append("Access-Control-Allow-Origin", "*");
    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

    fetch("http://readservices-b2c-etl.powerreviews.com/status/imports.json",myInit)
    .then(function(response) {
      console.log(response)
      console.log(response.json)
    })

  }
  render() {
    const oldImports = [];
    const staleImports = [];
    const okImports = [];

    this.props.data.map(function(value) {
      var time = (Date.now() - Date.parse(new Date(value.time))) / (1000*60*60*24)
      if ( time > 7) {
        oldImports.push(value)
      } else if ( time > 3) {
        staleImports.push(value)
      } else {
        console.log('hello')
        okImports.push(value)
      }

    })
    console.log(oldImports)
    const liStyling = {
      backgroundColor: this.state.color
    }



    console.log(this.state.currentDate.substring(0,5))

    return (
      <div>
        <div>
        <h3>Todays date: <Time /></h3>
        </div>
        <div className="statuses">
        <div className="critical">
        <h3>Critical</h3>
            {oldImports.map(function(value) {
              return <ul key={value.merchant_group_id}>
                <li style={{backgroundColor: 'rgba(255,0,0,0.5)'}}>
                  <strong>MG:</strong> {value.merchant_group_id}
                  <br />
                  <strong>Last Updated:</strong> {new Date(value.time).toString().substring(4,15)}

                </li>
              </ul>
            })}
        </div>
        <div className="needs-attention">
        <h3>Needs Attention</h3>
            {staleImports.map(function(value) {
              return <ul key={value.merchant_group_id}>
                <li style={{backgroundColor: 'rgba(255,255,0,0.8)'}}>
                  <strong>MG:</strong> {value.merchant_group_id}
                  <br />
                  <strong>Last Updated:</strong> {new Date(value.time).toString().substring(4,15)}

                </li>
              </ul>
            })}
            </div>
            <div className="healthy">
            <h3>Healthy</h3>
            {okImports.map(function(value) {
              return <ul key={value.merchant_group_id}>
                <li style={{backgroundColor: 'rgba(0,255,0,0.5)'}}>
                  <strong>MG:</strong> {value.merchant_group_id}
                  <br />
                  <strong>Last Updated:</strong> {new Date(value.time).toString().substring(4,15)}

                </li>
              </ul>
            })}
            </div>
            </div>
      </div>
    )
  }
}
