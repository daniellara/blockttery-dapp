import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container header-main">
        <div className="header-title">
          <h1>Blockttery</h1>
          <button className="header-button">How it works</button>
        </div>
        <div className="header-donation">
          <p>You can donate real ether here:<br/> {props.donationAccount}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;