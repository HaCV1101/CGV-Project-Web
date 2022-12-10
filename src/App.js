import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// <>
{
  /* <div className="main">
        <div id="header-container">
          <div id="header_btn">
            <div className="btn-cover">
              <img
                className="icon"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/recruitment_icon1.png"
                alt="icon"
              />

              <a id="btn-zoom" href="https://www.facebook.com/">
                Tuyển dụng
              </a>
            </div>
            <div className="btn-cover">
              <img
                className="icon"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon_promotion25.png"
                alt="icon"
              />
              <a id="btn-zoom" href="https://www.facebook.com/">
                Tin mới và ưu đãi
              </a>
            </div>
            <div className="btn-cover">
              <img
                className="icon"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon_ticket25.png"
                alt="icon"
              />
              <a id="btn-zoom" href="https://www.facebook.com/">
                Vé của tôi
              </a>
            </div>
            <div className="btn-cover">
              <img
                className="icon"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon_login25.png"
                alt="icon"
              />
              <a id="btn-zoom" href="https://www.facebook.com/">
                Đăng nhập/ Đăng ký
              </a>
            </div>
          </div>
          <div id="bg-top">
            <div className="top-container">
              <img
                className="logo"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                alt="logo"
              />
              <ul>
                <li>
                  <a href="https://www.facebook.com/">Phim</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">Rạp cgv</a>{" "}
                </li>
                <li>
                  <a href="https://www.facebook.com/">Thành viên</a>{" "}
                </li>
                <li>
                  <a href="https://www.facebook.com/">Cultureplex</a>{" "}
                </li>
              </ul>
              <img
                id="kenhCine"
                src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif"
                alt="kênh cine"
              />
              <img
                id="muaVe"
                src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
                alt="mua vé"
              />
            </div>
          </div>
          <div id="nav"></div>
        </div>
        <div id="content-container">
          <div id="slider"></div>
        </div>
        <div id="footer-container">
          <div className="footer-brand-slide">
            <div className="footer-brand-cover">
              <li>
                <a href="https://www.facebook.com/">
                  <img src={_4xd} alt="_4xd" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={imax} alt="imax" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={sturium} alt="starium" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={goldclass} alt="goldclass" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={lamour} alt="lamour" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={sweetbox} alt="sweetbox" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={cineS} alt="cineS" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={premium} alt="premium" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={screenX} alt="screenX" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={cineF} alt="cineF" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={cineL} alt="cineL" />
                </a>
              </li>
            </div>
          </div>
          <div className="footer-cgv-policy"></div>
          <div className="footer-cgv-address"></div>
          <div className="footer-brick"></div>
        </div>
      </div>
    </> */
}
