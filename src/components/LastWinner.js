import React from 'react';

const LastWinner = (props) => {
  return (
  props.lastWinnerAddress ?
  <p>The last winner was <br/>{props.lastWinnerAddress} <br/>He won {props.amountWon} ETHs</p> :
  <p>There are no winner for the draw yet</p>
  );
}

export default LastWinner;