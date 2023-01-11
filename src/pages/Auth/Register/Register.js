import React from "react";
import { useState } from "react";
import "./style.css";
import { Alert } from "react-bootstrap";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
    };
    fetch("https://cgv-backend.onrender.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          alert("Dang ky that bai");
          console.log(data);
          return;
        }
        console.log(JSON.stringify(data));
        alert("Dang ky thanh cong");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
  };

  const handleSubmit = () => {
    if (!name || !email || !password || !phone || !confirmPassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem("sanskarPassword", JSON.stringify(password));
      console.log(name, email, password, confirmPassword);
    }
  };
  return (
    <>
      <div className="form">
        <div className="form-body" id="body_f">
          <form onSubmit={submitForm}>
            <h3>ĐĂNG KÝ</h3>
            <div className="username">
              <label className="form__label" htmlFor="name">
                Tên{" "}
              </label>
              <input
                className="form__input"
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e)}
                id="name"
                placeholder="Tên"
              />
            </div>

            <div className="email">
              <label className="form__label" htmlFor="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                value={email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
              />
            </div>
            <div className="phone">
              <label className="form__label" htmlFor="phone">
                Số điện thoại
              </label>
              <input
                type="phone"
                id="phone"
                className="form__input"
                value={phone}
                onChange={(e) => handleInputChange(e)}
                placeholder="Số điện thoại"
              />
            </div>

            <div className="password">
              <label className="form__label" htmlFor="password">
                Mật Khẩu{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Mật Khẩu"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" htmlFor="confirmPassword">
                Xác nhận lại mật khẩu
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                placeholder="Xác nhận lại mật khẩu"
              />
            </div>
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn"
            >
              ĐĂNG KÝ
            </button>
          </form>
          {flag && (
            <Alert color="primary" variant="danger">
              Hãy điền đầy đủ thông tin
            </Alert>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
