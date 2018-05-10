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

  async componentDidMount() {
    const drawList = await blocktteryContract.methods.getPlayers().call();
    const drawPrice = await blocktteryContract.methods.price().call() * 0.001;
    const drawSize = await blocktteryContract.methods.size().call();
    const lastWinnerAddress = await blocktteryContract.methods.winner().call();
    const amountWon = await blocktteryContract.methods.price().call() * drawPrice * drawSize * 0.95;

    this.setState(() => ({ lastWinnerAddress, amountWon, drawList, drawSize, drawPrice }));
  }

  handleEnterDraw = async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState(() => ({ waiting: true, enterStatus: '' }));

    try {
      await blocktteryContract.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.drawPrice.toString(), 'ether'),
        gas: '300000'
      });
    } catch (err) {
      this.setState(() => ({enterStatus: 'error'}));
    }
    if (this.state.enterStatus !== 'error') {
      this.setState(() => ({enterStatus: 'successful'}));
    }
    this.setState(() => ({waiting: false}));

    const drawList = await blocktteryContract.methods.getPlayers().call();
    this.setState(() => ({ drawList }));
  }

  render() {
    return (
      <div>
        <Header donationAccount={this.state.donationAccount}/>
        <div className="container app-body">
          <div className="panel-parent">
            <div className="enter-card">
              <ActualDraw drawList={this.state.drawList} drawSize={this.state.drawSize}/>
            </div>
            <div className="enter-card">
              <EnterDraw
                drawPrice={this.state.drawPrice}
                handleEnterDraw={this.handleEnterDraw}
                waiting={this.state.waiting}
                enterStatus={this.state.enterStatus}
              />
            </div>
        </div>
          <div className="panel-parent">
            <div className="enter-card">
              <ManagerInfo />
            </div>
            <div className="enter-card">
              <LastWinner amountWon={this.state.amountWon} lastWinnerAddress={this.state.lastWinnerAddress}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}