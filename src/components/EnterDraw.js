import React from 'react';

const EnterDraw = (props) => {
    return (
      <div className="enter-draw">
        <p>You can pay {props.drawPrice} ETH to enter the draw</p>
        <button className="enter-button" disabled={props.waiting} onClick={props.handleEnterDraw}>Enter!</button>
      </div>
    );
}

export default EnterDraw;