import React from 'react';

const EnterDraw = (props) => {
    return (
      <div>
        <p>You can pay {props.drawPrice} ETH to enter the draw</p>
        <button disabled={props.waiting} onClick={props.handleEnterDraw}>Enter!</button>
      </div>
    );
}

export default EnterDraw;