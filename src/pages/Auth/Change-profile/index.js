import React, { useState } from "react";
import "./style.css";
function ChangePassword() {
  //event checkbox click console.log 1
  const user = JSON.parse(localStorage.getItem("token"));
  const [check, setCheck] = useState(false);
  const click = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <div className="format-profile-cgv">
      <div className="title-page">
        <h1>Thay đổi thông tin</h1>
      </div>
      <div className="page-change">
        <div className="fieldset edit-account-my-cgv">
          {/* <input
            name="form_key"
            type="hidden"
            defaultValue="O3OsfknKeqiskSkL"
          />

          <input
            type="hidden"
            name="oldphone"
            id="oldphone"
            defaultValue="0398829128"
          />
          <input
            type="hidden"
            name="oldemail"
            id="oldemail"
            defaultValue="linhh4599@gmail.com"
          /> */}
          <ul className="form-list edit-info-cgv-left">
            <li className="fields">
              <div className="customer-name">
                <label htmlFor="fullname" className="required">
                  <em>*</em>Tên
                </label>
                <div className="input-box">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    defaultValue={user.user.name}
                    title=""
                    placeholder=""
                    maxLength="255"
                    className="input-text required-entry"
                  />
                </div>
              </div>
            </li>
            <li className="fields phone_user">
              <label
                htmlFor="telephone"
                className="required"
                cursorshover="true"
              >
                <em>*</em>Điện thoại
              </label>
              <div className="input-box">
                <input
                  type="tel"
                  autoCapitalize="off"
                  autocorrect="off"
                  name="telephone"
                  id="telephone"
                  defaultValue={user.user.phone}
                  title="Phone Number"
                  className="input-text validate-mobile required-entry"
                />
              </div>
            </li>
            <li>
              <label htmlFor="gender" className="required" cursorshover="true">
                <em>*</em>Giới tính
              </label>
              <div className="input-box">
                <input type="radio" name="gender" defaultValue="1" />
                Nam
                <input
                  type="radio"
                  name="gender"
                  defaultValue="2"
                  checked="checked"
                />
                Nữ
                <input type="radio" name="gender" defaultValue="113" />
                None
              </div>
            </li>
            <li>
              <label htmlFor="month" cursorshover="true">
                Ngày sinh
              </label>
              <div className="input-box customer-dob">MAR 29 2000</div>
            </li>

            <li>
              <label htmlFor="email" className="required" cursorshover="true">
                <em>*</em>Địa chỉ email
              </label>
              <div className="input-box">{user.user.email} </div>
            </li>
          </ul>
          <ul className="form-list edit-info-cgv-right">
            <li className="fields field-country">
              <div className="field field-country-first">
                <label
                  htmlFor="region_id"
                  className="required "
                  cursorshover="true"
                >
                  <em>*</em>Thành phố/Tỉnh
                </label>
                <div className="input-box">
                  <select
                    id="region_id"
                    name="region_id"
                    title="Tỉnh/Tp"
                    className="validate-select"
                    cursorshover="true"
                    style={{ width: "100%" }}
                  >
                    <option defaultValue="0">Vui lòng chọn...</option>
                    <option defaultValue="65">Hồ Chí Minh</option>
                    <option selected defaultValue="64">
                      Hà Nội
                    </option>
                    <option defaultValue="60">Đà Nẵng</option>
                    <option defaultValue="48">Cần Thơ</option>
                    <option defaultValue="39">Đồng Nai</option>
                    <option defaultValue="62">Hải Phòng</option>
                    <option defaultValue="13">Quảng Ninh</option>
                    <option defaultValue="43">Bà Rịa-Vũng Tàu</option>
                    <option defaultValue="31">Bình Định</option>
                    <option defaultValue="57">Bình Dương</option>
                    <option defaultValue="33">Đắk Lắk</option>
                    <option defaultValue="51">Trà Vinh</option>
                    <option defaultValue="06">Yên Bái</option>
                    <option defaultValue="49">Vĩnh Long</option>
                    <option defaultValue="47">Kiên Giang</option>
                    <option defaultValue="73">Hậu Giang</option>
                    <option defaultValue="23">Hà Tĩnh</option>
                    <option defaultValue="32">Phú Yên</option>
                    <option defaultValue="58">Bình Phước</option>
                    <option defaultValue="40">Bình Thuận</option>
                    <option defaultValue="59">Cà Mau</option>
                    <option defaultValue="04">Cao Bằng</option>
                    <option defaultValue="72">Đăk Nông</option>
                    <option defaultValue="71">Điện Biên</option>
                    <option defaultValue="45">Đồng Tháp</option>
                    <option defaultValue="54">Bac Giang</option>
                    <option defaultValue="30">Gia Lai</option>
                    <option defaultValue="44">An Giang</option>
                    <option defaultValue="55">Bạc Liêu</option>
                    <option defaultValue="03">Hà Giang</option>
                    <option defaultValue="63">Hà Nam</option>
                    <option defaultValue="53">Bắc Cạn</option>
                    <option defaultValue="56">Bắc Ninh</option>
                    <option defaultValue="50">Bến Tre</option>
                    <option defaultValue="15">Hà Tây</option>
                    <option defaultValue="61">Hải Dương</option>
                    <option defaultValue="14">Hòa Bình</option>
                    <option defaultValue="66">Hưng Yên</option>
                    <option defaultValue="34">Khánh Hòa</option>
                    <option defaultValue="28">Kon Tum</option>
                    <option defaultValue="01">Lai Châu</option>
                    <option defaultValue="35">Lâm Đồng</option>
                    <option defaultValue="09">Lạng Sơn</option>
                    <option defaultValue="02">Lào Cai</option>
                    <option defaultValue="41">Long An</option>
                    <option defaultValue="67">Nam Đinh</option>
                    <option defaultValue="22">Nghệ An</option>
                    <option defaultValue="18">Ninh Bình</option>
                    <option defaultValue="36">Ninh Thuận</option>
                    <option defaultValue="68">Phú Thọ</option>
                    <option defaultValue="24">Quảng Bình</option>
                    <option defaultValue="27">Quảng Nam</option>
                    <option defaultValue="29">Quảng Ngãi</option>
                    <option defaultValue="25">Quảng Trị</option>
                    <option defaultValue="52">Sóc Trăng</option>
                    <option defaultValue="05">Sơn La</option>
                    <option defaultValue="37">Tây Ninh</option>
                    <option defaultValue="20">Thái Bình</option>
                    <option defaultValue="69">Thái Nguyên</option>
                    <option defaultValue="21">Thanh Hóa</option>
                    <option defaultValue="26">Thừa Thiên-Huế</option>
                    <option defaultValue="46">Tiền Giang</option>
                    <option defaultValue="07">Tuyên Quang</option>
                    <option defaultValue="70">Vĩnh Phúc</option>
                  </select>
                </div>
              </div>
            </li>

            {/* <!-- Customer Address --> */}
            <li className="wide">
              <label htmlFor="street_1" className="required">
                <em>*</em>Địa chỉ
              </label>
              <div className="input-box">
                <input
                  type="text"
                  name="street[]"
                  defaultValue="No address 700"
                  title="Địa chỉ"
                  id="street_1"
                  className="input-text  required-entry"
                />
              </div>
            </li>
            <li>
              <label
                htmlFor="current_password"
                className="required"
                cursorshover="true"
              >
                <em>*</em>Mật khẩu cũ
              </label>
              <div className="input-box">
                {/* <!-- This is a dummy hidden field to trick firefox from auto filling the password --> */}
                {/* <input type="text" className="input-text no-display" name="dummy" id="dummy" /> */}
                <input
                  type="password"
                  title="Mật khẩu cũ"
                  className="input-text required-entry"
                  name="current_password"
                  id="current_password"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="check-field-change-pass control">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={click}
              style={{ boxShadow: "none", borderColor: "#cccccc" }}
            />
            <label
              className="form-check-label "
              htmlFor="flexCheckDefault"
              cursorshover="true"
              style={{
                fontSize: "13px",
                fontWeight: "inherit",
                lineHeight: "18px",
              }}
            >
              {" "}
              Tôi muốn thay đổi mật khẩu{" "}
            </label>
          </div>

          <form className={check ? "d-block" : "d-none"}>
            <div className="field left">
              <label
                htmlFor="exampleInputPassword1 "
                className="form-label required"
              >
                <em>*</em>Nhập mật khẩu mới
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="field right">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label required"
              >
                <em>*</em>Nhập lại mật khẩu mới
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
          </form>
          <div className="buttons-set cgv-edit-btn">
            <button
              type="submit"
              title="Lưu lại"
              className="button"
              cursorshover="true"
            >
              <span cursorshover="true">
                <span cursorshover="true">Lưu lại</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
