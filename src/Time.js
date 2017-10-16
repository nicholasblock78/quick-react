import React from 'react';

export default class Time extends React.Component {
  render() {
    return new Date(Date.now()).toString().substring(4,15);
  }
}
