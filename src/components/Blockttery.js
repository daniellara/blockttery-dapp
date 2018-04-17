import React from 'react';

import Header from './Header';
import ManagerInfo from './ManagerInfo';
import LastWinner from './LastWinner';
import ActualDraw from './ActualDraw';
import EnterDraw from './EnterDraw';

import blocktteryContract from '../support/blocktteryContract';
import web3 from '../support/web3';

export default class Blockttery extends React.Component {
  state = {
    lastWinnerAddress: '',
    amountWon: 0,
    drawList: [],
    drawSize: 0,
    drawPrice: 0,
    donationAccount: '0xcDD8AF1f9361E7B3c169f4099A16ff23c7dcf217',
    waiting: false
  }

  async componentWillMount() {
    const drawList = await blocktteryContract.methods.getPlayers().call();
    const drawPrice = await blocktteryContract.methods.price().call() * 0.001;
    const drawSize = await blocktteryContract.methods.size().call();
    const lastWinnerAddress = await blocktteryContract.methods.winner().call();
    const amountWon = await blocktteryContract.methods.price().call() * drawPrice * drawSize * 0.95;

    this.setState(() => ({ lastWinnerAddress, amountWon, drawList, drawSize, drawPrice }));
  }

  handleEnterDraw = async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState(() => ({ waiting: true }));

    await blocktteryContract.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.drawPrice.toString(), 'ether'),
      gas: '300000'
    });
    const drawList = await blocktteryContract.methods.getPlayers().call();
    this.setState(() => ({ waiting: false, drawList }));
  }

  render() {
    return (
      <div>
        <Header donationAccount={this.state.donationAccount}/>
        <ManagerInfo />
        <LastWinner amountWon={this.state.amountWon} lastWinnerAddress={this.state.lastWinnerAddress}/>
        <ActualDraw drawList={this.state.drawList} drawSize={this.state.drawSize}/>
        <EnterDraw
          drawPrice={this.state.drawPrice}
          handleEnterDraw={this.handleEnterDraw}
          waiting={this.state.waiting}
        />
      </div>
    );
  }
}