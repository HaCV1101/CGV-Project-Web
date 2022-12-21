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
                <Link to="/profile">Xin chao, {user.user.name}</Link>
                <Link
                  to="/logout"
                  onClick={logoutOnclick}
                  style={{ marginLeft: "20px" }}
                >
                  Đăng xuẩt
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
      </div>
    </>
  );
}

export default Header;
