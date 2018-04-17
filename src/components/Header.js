import React from 'react';

const Header = (props) => {
  return (
    <div>
      <div>
        <h2>Blockttery</h2>
        <h4>"Gambling with Ether"</h4>
        <button>How it works</button>
      </div>
      <div>
        <p>You can donate real ether here: {props.donationAccount}</p>
      </div>
    </div>
  );
};

export default Header;