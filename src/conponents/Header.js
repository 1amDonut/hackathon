import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-text">購物網站</span>
          <input class="btn btn-primary btn-lg active" type='button' value='購物車' />
        </nav>
        <ul class='nav'>
          <li class='class="nav-item"'>
            <a class='nav-link'><Link to='/'>首頁</Link></a>
          </li>
          <li class='class="nav-item"'>
            <a class='nav-link'><Link to='/about/'>關於</Link></a>
          </li>
          <li class='class="nav-item"'>
            <a class='nav-link'><Link to='/product'>詳細活動</Link></a>
          </li>
          <li class='class="nav-item"'>
            <a class='nav-link'><Link>統計點閱數圖表</Link></a>
          </li>
        </ul>

      </div>
    );
  }
}

export default Header;
