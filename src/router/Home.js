import React, { Component } from 'react';
class Home extends Component {
  renderTicket(p={}){
    return(
        <div class="card">
          <img src={p.imageUrl} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{p.title}</h5>
              <p class="card-text"></p>
            </div>
          <div class="card-footer" onClick={()=>this.props.history.push(`/product/${p.UID}`)}>
            <small class="text-muted">了解更多</small>
          </div>
        </div>
    );
  }
  render() {
    console.log(this.props.ticket)
    return (
        <div className="Home">
            <div class="card-deck">
              {this.props.ticket.map(p=>this.renderTicket(p))}
            </div>
        </div>
    );
  }
}

export default Home;
