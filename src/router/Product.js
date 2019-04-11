import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Product extends Component {
  static defaultProps = {
    center: {
      lat: 23.5,
      lng: 121.61121
    },
    zoom: 11
  };
  render() {
    const id = String(this.props.location.pathname).replace('/product/', '');
    const p = this.props.ticket.find(p => p.UID === id);
    //if (!p) return <Redirect to='/'/>
    return (
      <div className="Product">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={p.imageUrl} class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{p.title}</h5>
              <input class="btn btn-primary btn-lg" type='button' value='加入購物車' />
              <p class="card-text">{p.descriptionFilterHtml}</p>
              <table border='1' class="table table-bordered">
                <tr>
                  <th scope="row">主辦單位</th>
                  <td>{p.masterUnit}</td>
                </tr>
                <tr>
                  <th scope="row">展出時間</th>
                  <td>{p.startDate}至{p.endDate}</td>
                </tr>
                <tr>
                  <th scope="row">展出地點</th>
                  <td>{p.showInfo[0].location}</td>
                </tr>
                <tr>
                  <th scope="row">相關網址</th>
                  <td>{p.sourceWebPromote}</td>
                </tr>
              </table>
              <hr />
              展出地點 (自動標示GPS座標)
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyCGb0KBKBhYExq7PM5v6N4L_oiG_Tfhi-0' }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={p.showInfo[0].latitude}
                    lng={p.showInfo[0].longitude}
                    text="My Marker"
                  />
                </GoogleMapReact>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
