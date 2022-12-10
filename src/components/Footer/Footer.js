import "./footer.css";
import _4xd from "../../img/1.png";
import imax from "../../img/6.png";
import sturium from "../../img/8.png";
import goldclass from "../../img/7.png";
import lamour from "../../img/9.png";
import sweetbox from "../../img/5.png";
import premium from "../../img/10.png";
import screenX from "../../img/11.png";
import cineF from "../../img/3.png";
import cineL from "../../img/4.png";
import cineS from "../../img/2.png";
import suit from "../../img/12.png";
import cgvFoot from "../../img/cgv-foot.png";

function Footer() {
  return (
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
          <li>
            <a href="https://www.facebook.com/">
              <img
                style={{ width: "100%", margin: "0 -70px 0 -70px" }}
                src={suit}
                alt="suit"
              />
            </a>
          </li>
        </div>
      </div>
      <div className="footer-cgv-policy">
        <div className="footer-container">
          <div className="footer-title">
            <h6>CGV Việt Nam</h6>
            <li>Giới Thiệu</li>
            <li>Tiện Ích Online</li>
            <li>Thẻ Quà Tặng</li>
            <li>Tuyển Dụng</li>
            <li>Liên Hệ Quảng Cáo CGV</li>
          </div>
          <div className="footer-title">
            <h6>Điều Khoản Sử Dụng</h6>
            <li>Điều Khoản Chung</li>
            <li>Điều Khoản Giao Dịch</li>
            <li>Chính Sách Thanh Toán</li>
            <li>Chính Sách Bảo Mật</li>
            <li>Câu Hỏi Thường Gặp</li>
          </div>
          <div className="footer-title">
            <h6>Kết nối với chúng tôi</h6>
            <a href="https://www.facebook.com/">
              <img
                style={{ width: "120%" }}
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-social-footer-40.png"
                alt=""
              />
            </a>
            <a href="Vhttps://www.facebook.com/">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cong-thuong.PNG"
                alt=""
              />
            </a>
          </div>
          <div className="footer-title">
            <h6>Chăm sóc khách hàng</h6>
            <li>Hotline: 1900 6017</li>
            <li>
              Giờ làm việc: 8:00 - 22:00 <br /> (Tất cả các ngày bao gồm
              <br /> cả ngày Lễ Tết)
            </li>
            <li>Email hỗ trợ: hoidap@cgv.vn</li>
          </div>
        </div>
      </div>
      <div className="footer-cgv-address">
        <div className="cgv-cover">
          <div className="cgv-foot">
            <img src={cgvFoot} alt="cgvFoot" />
          </div>
          <div className="cgv-end">
            <h6>CÔNG TY TNHH CJ CGV VIETNAM</h6>
            <p>
              Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký
              thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi
            </p>
            <p>Sở KHĐT thành phố Hồ Chí Minh.</p>
            <p>
              Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14,
              Q.10, TPHCM.
            </p>
            <p>Hotline: 1900 6017</p>
            <p>COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>

      <div className="footer-brick"></div>
    </div>
  );
}

export default Footer;
