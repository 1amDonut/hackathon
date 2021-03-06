import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route}from "react-router-dom";
import Home from './router/Home';
import About from './router/About';
import Product from './router/Product';
import Header from './conponents/Header';
import Footer from './conponents/Footer';
class App extends Component {
  state = {
    product:[{"version":"1.4","UID":"5b470f74aaa32b6f921746f1","title":"手舞足蹈－2018年藝術長廊創作展","category":"6","showInfo":[{"time":"2018/07/06 10:00:00","location":"新北市金山區西勢湖2號","locationName":"朱銘美術館 藝術長廊","onSales":"Y","price":"全票：280元\r\n優待票 (學生、65歲以上長者)：250元\r\n優待票 (持身心障礙手冊者)：140元\r\n團體票 (15人以上、美術相關科系學生)：220元","latitude":"25.246443","longitude":"121.61121","endTime":"2019/06/02 18:00:00"}],"showUnit":"朱銘美術館","discountInfo":"","descriptionFilterHtml":"手舞足蹈－2018年藝術長廊創作展\r\n\r\n展覽時間：\r\n現地創作：2018年7月6日 ～ 8月31日。\r\n成果展覽：2018年9月1日 ～ 2019年6月2日。\r\n\r\n每逢夏季七、八月，朱銘美術館多會邀請數位新銳藝術家，一同在200公尺長的藝術長廊現地創作，並舉辦相關活動與觀眾互動，使其成為藝術家、觀眾與美術館間交流與分享創作的展演平台。2018年藝術長廊邀請知名藝術家REACH、DEBE與王略來此現地創作，透過他們獨特的藝術語彙，展現本館的多樣風貌，並以「手舞足蹈」為題，不僅呼應館內「2018年朱銘新作展：人間系列－芭蕾」，更透過壁畫來詮釋舞蹈的美感與特色，同時探索繪畫與舞蹈之間的關係。\r\n\r\n舞蹈主要是以有節奏的動作為表現方法的藝術形式。舞者以律動的肢體語言為媒介，繪畫則是藝術家於平面上使用各類材料的成果，都在藉以傳達創作者的情思。而舞蹈是否能被視為動態的繪畫？舞者的每個動作彷彿都與場景交融成可以獨立觀看的繪畫，也是繪畫常見的題材。在觀者的眼中，畫裡的造形與色彩也產生舞蹈般的律動。繪畫的創作過程又是否具有舞蹈般的表演性與觀賞性？本次藝術長廊以「手舞足蹈」為題，除了內容上表現舞蹈之外，「蹈」則兼具跳動與投入之意，呼應大型壁畫不僅要用手舞動畫筆也常要用腳移動位置的創作過程，並結合作為元素的造形與色彩，來延伸繪畫與舞蹈之間的關係，讓觀者不僅能在視覺上有多層次的感官享受，也能藉此思考更多元的藝術語彙。","imageUrl":"http://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D12/E162/F741/9e0f25ac-53fe-4fbd-8f4e-aba2f61b3686.jpg","masterUnit":["朱銘美術館"],"subUnit":[],"supportUnit":[],"otherUnit":[],"webSales":"","sourceWebPromote":"https://www.facebook.com/events/220425755238325/","comment":"手舞足蹈－2018年藝術長廊創作展\r\n\r\n展覽時間：\r\n現地創作：2018年7月6日 ～ 8月31日。\r\n成果展覽：2018年9月1日 ～ 2019年6月2日。\r\n\r\n2018年藝術長廊邀請藝術家REACH、DEBE、王略等，一同在200公尺長的藝術長廊現地創作，以「手舞足蹈」為題，並舉辦相關活動與觀眾互動，使其成為藝術家、觀眾與美術館間交流與分享創作的展演平台。","editModifyDate":"2018/07/13 13:25:29","sourceWebName":"Ju Ming Museum","startDate":"2018/07/06","endDate":"2019/06/02","hitRate":0},{"version":"1.4","UID":"5c9da5ebaaa399801193c665","title":"「遇見陪伴」—台灣晚緣五週年展","category":"6","showInfo":[{"time":"2019/05/18 10:00:00","location":"臺北市中正區濟南路二段36號","locationName":"財團法人伽耶山基金會","onSales":"N","price":"","latitude":null,"longitude":null,"endTime":"2019/06/22 17:00:00"}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"「遇見陪伴」－台灣晚緣五週年展\r\n\r\n有一天，我們都將老去。\r\n\r\n漸漸步入老齡化的台灣，有一群人無償地奉獻時間與愛心，在大台北地區安養機構，定時定期地與長者進行一對一的陪伴，這樣的服務已經持續了五年。伽耶山基金會規劃了圖文資料、現場互動導覽，並有紀錄片放映、相關講座與體驗活動。願與您分享每個溫暖的足跡和動人的點滴。晚緣陪伴長者，您來陪伴晚緣，期待這樣的幸福陪伴，為邁入高齡化的台灣社會，注入溫暖與力量。\r\n\r\n日期：5/18-6/22 (端午休展)   10:00-17:00\r\n\r\n地點：伽耶山基金會　印儀學苑一樓\r\n\r\n             台北市中正區濟南路二段36號\r\n\r\n票價：免費\r\n\r\n電話：02-23946800","imageUrl":"http://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D29/E125/F850/b1f6e625-321d-466d-abd9-c05a3abed781.jpg","masterUnit":["財團法人伽耶山基金會"],"subUnit":[],"supportUnit":[],"otherUnit":[],"webSales":"","sourceWebPromote":"http://wanyuan.gaya.org.tw","comment":"","editModifyDate":"2019/04/01 11:33:06","sourceWebName":"財團法人伽耶山基金會","startDate":"2019/05/18","endDate":"2019/06/22","hitRate":0},{"version":"1.4","UID":"5c9dc42baaa399801193c668","title":"ZA SHARE Youth 雜學青_多元學習博覽會","category":"6","showInfo":[{"time":"2019/05/16 10:00:00","location":"臺北市100台北市中正區八德路一段1號","locationName":"臺北華山1914文化創意產業園區","onSales":"Y","price":"","latitude":null,"longitude":null,"endTime":"2019/05/19 20:00:00"}],"showUnit":"","discountInfo":"","descriptionFilterHtml":"ZA SHARE Youth 雜學青_多元學習博覽會\r\n\r\n《喧嘩、珊瑚、什錦麵 Noise, Sanga, Mixed-Noodles》\r\n\r\n時間：2019/05/16- 2019/05/19\r\n地點：臺北華山1914文化創意產業園區\r\n\r\n\r\n活動網站：http://www.ozzie-art.com/zsytpe19/\r\n雜學粉專：https://www.facebook.com/zashare.expo/\r\n\r\n\r\n「 當各種主題和人們走在一起時，最意想不到的學習就會發生。」\r\n \r\n亞 洲 最 大 的 多 元 學 習 博 覽 會\r\n2015-2018年累計超過8000萬人次觸及流量，18萬觀展人數，1300個創新學習單位或個人參展，2019最不能錯過的多元學習盛會。只要差異存在，學習就會發生。ZA SHARE Youth 雜學青 是給屬於「年輕人」的展覽，超有態度，超狂，超好玩，集結各種文化議題、學習提升、自我實現與想像探索的創新內容，讓倡議內容像市井生活的什錦麵一樣豐富與包容，用理念與想法盡情的喧嘩不停，自由想像各種生命的可能。\r\n這裡是分享多元學習的野生實驗場，最具娛樂性、生活感，有態度的展覽！\r\n \r\n\r\n \r\n","imageUrl":"http://cloud.culture.tw/e_new_upload/cms/image/A0/B0/C0/D29/E150/F888/5b9cf7ca-5b5e-4546-a6c6-97d800d701a2.jpg","masterUnit":["雜學 ZA SHARE"],"subUnit":[],"supportUnit":[],"otherUnit":[],"webSales":"https://zashare.kktix.cc/events/zashareyouth19","sourceWebPromote":"https://zashare.kktix.cc/events/zashareyouth19","comment":"","editModifyDate":"2019/04/01 11:45:48","sourceWebName":"雜學股份有限公司","startDate":"2019/05/16","endDate":"2019/05/19","hitRate":0},],title:'ticket',
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          { /** exact 精確的 = 完全配對 */}
          <Route path="/" exact={true} render={(r)=><Home{...r} ticket={this.state.product}/>} />
          <Route path="/about/"  component={About} />
          <Route path="/product/" render={(r)=><Product{...r} ticket={this.state.product}/>}  />
          
        <Footer/>
      </div>
    </Router>
    );
  }
}

export default App;
