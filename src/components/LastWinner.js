import React from 'react';

const LastWinner = (props) => {
  return (
  props.lastWinnerAddress ?
  <p><b>The last winner was:</b> <br/>{props.lastWinnerAddress} <br/><br/>He won <b>{props.amountWon}</b> ETHs</p> :
  <p>There are no winner for the draw yet</p>
  );
}

export default LastWinner;