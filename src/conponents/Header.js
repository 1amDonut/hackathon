import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className="Header">
        { /** 所有的 class 都應該要改成使用 className */}
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-text">購物網站</span>
          <input className="btn btn-primary btn-lg active" type='button' value='購物車' />
        </nav>
        <ul className='nav'>
          { /** 這寫錯了，怎麼兩個 class */}
          <li className="nav-item">
            { /** Link 就是 a 了，不要再重複寫 */}
            { /** 然後屬性請使用雙引號 to="/"，不要 to='/' */}
            { /** <a class='nav-link'><Link to='/'>首頁</Link></a> */}
            <Link className="nav-link" to="/">首頁</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about/">首頁</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product">詳細活動</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">統計點閱數圖表</Link>
          </li>
        </ul>

      </div>
    );
  }
}

export default Header;
