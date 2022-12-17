import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  //set state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const setChangePassword = (e) => {
    setPassword(e.target.value);
  };

  //login with fetch api
  const login = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("login success");
          window.localStorage.setItem("token", JSON.stringify(data.data));
          window.location.href = "/";
        }
      });
  };
  const user = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);
  return (
    <div className="container">
      <div className="row" style={{ display: "block" }}>
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div
              className="card-header"
              style={{ display: "flex", textAlign: "center", padding: "5px" }}
            >
              <h5 style={{ flex: "1", margin: "7px" }}>ĐĂNG NHẬP</h5>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="form-group">
                  <label htmlFor="email">
                    <h6 style={{ margin: "12px 0 10px 0" }}>
                      Email hoặc số điện thoại
                    </h6>
                  </label>
                  <input
                    style={{ fontSize: "11px" }}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email hoặc số điện thoại"
                    value={email}
                    onChange={setChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <h6 style={{ margin: "12px 0 10px 0" }}>Mật khẩu</h6>
                  </label>
                  <input
                    style={{ fontSize: "11px" }}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={setChangePassword}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    width: "100%",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px",
                    marginTop: "20px",
                  }}
                >
                  ĐĂNG NHẬP
                </button>
              </form>
            </div>
            <div
              className="card-footer"
              style={{
                display: "flex",
                textAlign: "center",
              }}
            >
              <p style={{ flex: "1", margin: "6px" }}>
                Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
//note test
