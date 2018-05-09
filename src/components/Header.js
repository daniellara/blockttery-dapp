import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container header-main">
        <div className="header-title">
          <h1>Blockttery</h1>

        </div>
        <div className="header-donation">
          <p>You can donate real ether here:<br/> {props.donationAccount}</p>
        </div>
      </div>
    </div>
  );
};
// <button className="header-button">How it works</button>
export default Header;