import React from 'react';

import Header from './Header';
import ManagerInfo from './ManagerInfo';

export default class Blockttery extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ManagerInfo />
      </div>
    );
  }
}