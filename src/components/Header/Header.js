import "./header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const user = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const logoutOnclick = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };
  return (
    <>
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
            {!user ? (
              <Link to="/login">Đăng nhập/Đăng ký</Link>
            ) : (
              <>
                <Link to="/profile/general">Xin chào, {user.user.name}</Link>
                <Link
                  to="/logout"
                  onClick={logoutOnclick}
                  style={{ marginLeft: "20px" }}
                >
                  Thoát
                </Link>
              </>
            )}
          </div>
        </div>
        <div id="bg-top">
          <div className="top-container">
            <Link to="/">
              <img
                className="logo"
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                alt="logo"
              />
            </Link>
            <div>
              <ul>
                <li className="menu">
                  Phim
                  <ul className="subMenu">
                    <li>
                      <Link to="/movies/now-showing">Phim Đang Chiếu</Link>
                    </li>
                    <li>
                      <Link to="/movies/coming-soon">Phim Sắp Chiếu</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  Rạp cgv
                  <ul
                    className="subMenu"
                    style={{
                      marginLeft: " -10px",
                    }}
                  >
                    <li>
                      <a href=""> Tất Cả Các Rạp</a>
                    </li>
                    <li>
                      <a href=""> Rạp Đặc Biệt</a>
                    </li>
                    <li>
                      <a href=""> Rạp 3D</a>
                    </li>
                  </ul>
                </li>
                <li className="menu" style={{ margin: "40px 13px" }}>
                  Thành viên
                  <ul className="subMenu" style={{ marginLeft: "-20px" }}>
                    {/* <div
                      style={{ position: "absolute", border: "2px solid #fff" }}
                    ></div> */}
                    <li>
                      <a href=""> Tài khoản CGV</a>
                    </li>
                    <li>
                      <a href=""> Quyền Lợi</a>
                    </li>
                  </ul>
                </li>
                <li className="menu" style={{ margin: "40px 50px auto 13px" }}>
                  Cultureplex
                  <ul className="subMenu" style={{ marginLeft: " -20px" }}>
                    <div style={{}}></div>
                    <li>
                      <a href=""> Quầy Online</a>
                    </li>
                    <li>
                      <a href=""> Thuê Rạp và Vé Nhóm</a>
                    </li>
                    <li>
                      <a href=""> E-CGV</a>
                    </li>
                    <li>
                      <a href=""> Thẻ Quà Tặng</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

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
      </div>
    </>
  );
}

export default Header;
