import React from 'react';

const ActualDraw = (props) => {
    return (
      <div>
        <p>Next draw participants</p>
        <ul>
          {props.drawList.map((participant, index) => <li key={participant + index}>{participant}</li>)}
        </ul>
        <p>Draw size: {props.drawList.length}/{props.drawSize}</p>
      </div>
    );
}

export default ActualDraw;