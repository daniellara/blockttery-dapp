import React from 'react';

const LastWinner = (props) => {
  return (
  props.lastWinnerAddress ?
  <p>The last winner was {props.lastWinnerAddress} and he won {props.amountWon} ETHs</p> :
  <p>There are no winner for the draw yet</p>
  );
}

export default LastWinner;