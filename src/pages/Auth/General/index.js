import React from "react";
import "./style.css";
function General() {
  const user = JSON.parse(localStorage.getItem("token"));
  const handleClick = () => {
    window.location.href = "/profile/change-profile";
  };
  return (
    <div className="format-profile-cgv">
      <div className="title-page">
        <h1>Thông tin chung</h1>
      </div>
      <div className="page-profile">
        <div className="my-profile-cgv">
          <div className="image-profile-cgv">
            <div className="insert-image-profile-cgv">
              <label id="fileToUpload" htmlFor="fileToUpload">
                <img
                  src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/icon-profile-cgv.png"
                  width="120"
                  height="120"
                  alt="Avatar Profile"
                  cursorshover="true"
                />
              </label>
            </div>
            <div className="button-change-image-profile">
              <button type="button" id="btnchange">
                <span>
                  <span>Thay đổi</span>
                </span>
              </button>
            </div>
          </div>
          <div className="barcode-my-cgv">
            <div className="show-barcode-my-cgv">
              <strong>Thẻ thành viên</strong>
            </div>
            <div className="show-barcode-my-cgv">
              <img
                src="https://www.barcodesinc.com/generator/image.php?code=9992265648561012&amp;style=196&amp;type=C128B&amp;width=220&amp;height=80&amp;xres=1&amp;font=3"
                alt="Barcode."
              />
            </div>
          </div>
        </div>
        <div className="welcome-msg">
          <p className="hello">
            <strong>Xin chào {user.user.name},</strong>
          </p>
          <p>
            Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của
            mình.
          </p>
        </div>
        <div className="box-account cgv-info">
          <div className="cgv-status-member">
            <div className="cgv-tier">
              <label>Cấp Độ Thẻ</label>
              <span className="member-icon"></span>
            </div>
            <div className="cgv-point total-spending">
              <div className="format-acc-point">
                <label>Tổng Chi Tiêu</label>
                <span className="acc-show-point">0 đ</span>
              </div>
            </div>
            <div className="cgv-point">
              <div className="format-acc-point">
                <label>Điểm CGV</label>
                <span className="acc-show-point"> 0 P </span>
              </div>
            </div>
          </div>
          <div className="cgv-gift-card cgv-info-detail">
            <label cursorshover="true">Thẻ quà tặng</label>
            <div className="format-acc">
              <span className="acc-show-point">0 đ</span>
              <a
                href="https://www.cgv.vn/default/loyalty/account/gift/"
                cursorshover="true"
              >
                <span className="icon-acc-add" cursorshover="true">
                  Xem
                </span>
              </a>
            </div>
          </div>
          <div className="cgv-voucher cgv-info-detail cgv-coupons">
            <label cursorshover="true">Voucher</label>
            <div className="format-acc">
              <span className="acc-show-point">0 </span>
              <a href="https://www.cgv.vn/default/loyalty/account/voucher/">
                <span className="icon-acc-add" cursorshover="true">
                  Xem
                </span>
              </a>
            </div>
          </div>
          <div className="cgv-coupon cgv-info-detail cgv-coupons">
            <label>Coupon</label>
            <div className="format-acc">
              <span className="acc-show-point">0 </span>
              <a href="https://www.cgv.vn/default/loyalty/account/coupon/">
                <span className="icon-acc-add">Xem</span>
              </a>
            </div>
          </div>
          <div className="cgv-info-member-card cgv-point-last cgv-info-detail">
            <label>Thẻ Thành Viên</label>
            <div className="format-acc">
              <span className="acc-show-point">1 </span>
              <a href="https://www.cgv.vn/default/loyalty/account/card/">
                <span className="icon-acc-add">Xem</span>
              </a>
            </div>
          </div>
        </div>
        <div className="box-account box-info">
          <div className="box-head">
            <h2>Thông tin tài khoản</h2>
          </div>
          <div className="box">
            <div className="box-title">
              <h3 className="title-my-cgv">Liên hệ</h3>
              <span className="change-my-cgv" onClick={handleClick}>
                Thay đổi
              </span>
            </div>
            <div className="box-content box-content-my-cgv col2-set">
              <span>Tên : {user.user.name}</span>
              <span>Email : {user.user.email}</span>
              <span>Tên đăng nhập : {user.user.email}</span>
              <span>Điện thoại : {user.user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
