import React, { Component } from 'react';
class Home extends Component {

  // renderTicket 這命名方式不錯！
  renderTicket(p = {}) {

    // 這裡因為使用 map 去重複產很多個 card，應該要給予 key 作為識別項目。
    // 就像當初寫 ul li 一樣。
    // key 要去思考有什麼東西可以作為唯一值
    // 你的 p 裡面有 UID，就可以拿來做為識別編號

    // class 要改成 className
    return (
      <div key={p.UID} className="card">
        <img src={p.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{p.title}</h5>
          <p className="card-text"></p>
        </div>
        <div className="card-footer" onClick={() => this.props.history.push(`/product/${p.UID}`)}>
          <small className="text-muted">了解更多</small>
        </div>
      </div>
    );
  }
  render() {
    console.log(this.props.ticket)
    return (
      <div className="Home">
        { /** class 要改成 className */}
        <div className="card-deck">
          {this.props.ticket.map(p => this.renderTicket(p))}
        </div>
      </div>
    );
  }
}

export default Home;
