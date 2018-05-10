import React from 'react';

const EnterDraw = (props) => {
    return (
      <div className="enter-draw">
        <p>You can pay <b>{props.drawPrice}</b> ETH to enter the draw</p>
        <button className="enter-button" disabled={props.waiting} onClick={props.handleEnterDraw}>Enter!</button>
        {props.waiting && <p className="waiting-message">Waiting for transaction...</p>}
        {props.enterStatus === 'error' && <p className="error-message">A problem happens with the transaction</p>}
        {props.enterStatus === 'successful' && <p className="successful-message">You are in!</p>}
      </div>
    );
}

export default EnterDraw;