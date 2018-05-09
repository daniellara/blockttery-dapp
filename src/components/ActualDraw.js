import React from 'react';

const ActualDraw = (props) => {
    return (
      <div>
        <p>Next draw participants</p>
        {props.drawList.map((participant, index) => <p key={participant + index}>{participant}</p>)}
        <p>Draw size: {props.drawList.length}/{props.drawSize}</p>
      </div>
    );
}

export default ActualDraw;