import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './router/Home';
import About from './router/About';
import Product from './router/Product';
import Header from './conponents/Header';
import Footer from './conponents/Footer';

// 把假的檔案移除去
import Products from './api/Product.json';

class App extends Component {
  // 雖然是假資料，但最好放在外部檔案，用 API 讀取進來，Products。
  state = {
    product: Products,
    title: 'ticket',
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          { /** exact 精確的 = 完全配對 */}
          { /** exact={true} 和 exact 一樣意思，如果是 true，就不用額外設定 =true */}
          { /** <Home{ 黏住了，要隔開 <Home { */}
          <Route path="/" exact render={(r) => <Home {...r} ticket={this.state.product} />} />
          <Route path="/about/" component={About} />
          <Route path="/product/" render={(r) => <Product {...r} ticket={this.state.product} />} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
