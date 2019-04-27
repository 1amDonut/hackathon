import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Product extends Component {
  state = {
    GMAPKEY: 'AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y',
  }
  static defaultProps = {
    // center: {
    //   lat: 23.5,
    //   lng: 121.61121
    // },
    zoom: 11
  };
  render() {
    const id = String(this.props.location.pathname).replace('/product/', '');
    const p = this.props.ticket.find(p => p.UID === id);

    if (!p) return <Redirect to='/' />

    // 從 props 中，拿出當前的經緯度，以此作為地圖中心點。
    const { latitude, longitude } = p.showInfo[0];
    const center = {
      lat: Number(latitude), lng: Number(longitude)
    };

    // 內文描述的部分，你的換行符號ㄓ /r/n 必須要轉換成 <br /> 
    // 所以我們用取代的方式，通通換成 <br />，而 /g 是指全部取代
    p.descriptionFilterHtml = p.descriptionFilterHtml.replace(/\r\n/g, '<br />');

    return (
      <div className="Product">
        { /** 要記得改成 className...(拳頭握緊) */}
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={p.imageUrl} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <input className="btn btn-primary btn-lg" type='button' value='加入購物車' />
              { /** dangerouslySetInnerHTML 這個東西不常用到，但他可以渲染帶有 html 的文字 */}
              <p
                className="card-text"
                style={{ textAlign: 'left', margin: '3rem 0' }}
                dangerouslySetInnerHTML={{ __html: p.descriptionFilterHtml }}
              ></p>
              <table border='1' className="table table-bordered">
                { /** 表格請使用 tbody 包起來 */}
                <tbody>
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
                </tbody>
              </table>
              <hr />
              展出地點 (自動標示GPS座標)
              <div style={{ height: '100vh', width: '100%' }}>
                { /** 盡量將 key 寫成變數，這種東西經常更換。 */}
                <GoogleMapReact
                  bootstrapURLKeys={{ key: this.state.GMAPKEY }}
                  // 你的中心點跟你的 marker 太遠了
                  // 建議可以把中心點改成跟 marker一樣座標就可以看到了
                  // defaultCenter={this.props.center}
                  // 請參考上面 25行處
                  defaultCenter={center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={Number(p.showInfo[0].latitude)}
                    lng={Number(p.showInfo[0].longitude)}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Product;
