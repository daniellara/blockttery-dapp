import React from 'react';
import web3 from '../support/web3';
import blocktteryContract from '../support/blocktteryContract';

export default class ManagerInfo extends React.Component {
  state = {
    manager: ''
  }

  async componentDidMount() {
    const manager = await blocktteryContract.methods.manager().call();

    this.setState(() => ({ manager }));
  }

  render() {
    return (
      <p>This contract is managed by: {this.state.manager}</p>
    );
  }
}