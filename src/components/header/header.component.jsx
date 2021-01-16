import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="log"/>
    </Link>
    <div className="options">
      <div className="option">
        <Link className='option' to='/shop'>SHOP</Link>
      </div>
      <div className="option">
        <Link className='option' to='/shop'>CONTACT</Link>
      </div>
    </div>
  </div>
)
export default Header