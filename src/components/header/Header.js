import React, { PureComponent } from 'react';
import './Header.css';
import logo from '../../assets/imgs/logo.png';

class HeaderComponent extends PureComponent {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="github" className="logo" />
      </header>
    );
  }
}

export default HeaderComponent;
