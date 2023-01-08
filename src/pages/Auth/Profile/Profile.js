import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
function Profile() {
  // const user = JSON.parse(localStorage.getItem('token'));
  const [active, setActive] = useState(1);
  useEffect(() => {
    setActive(window.location.pathname === "/profile/general" ? 1 : 2);
    setActive(window.location.pathname === "/profile/change-profile" ? 2 : 1);
  }, [window.location.pathname]);

  return (
    <div>
      <div style={{ marginTop: "32px", marginLeft: "24%" }}>
        <span
          style={{
            color: "#e71a0f",
            fontWeight: 600,
            fontSize: "22px",
            lineHeight: "30.8px",
            textTransform: "uppercase",
            marginLeft: "10px",
          }}
        >
          TÀI KHOẢN CGV
        </span>

        <nav>
          <ul
            className="nav flex-column"
            style={{ listStyleType: "none", marginTop: "7px" }}
          >
            <li
              style={
                active === 1
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="general"
                className="nav-link  fw-bold menu-link"
                style={
                  active === 1
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(1)}
              >
                THÔNG TIN CHUNG
              </Link>
            </li>

            <li
              style={
                active === 2
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="change-profile"
                className="nav-link fw-bold menu-link"
                style={
                  active === 2
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(2)}
              >
                CHI TIẾT TÀI KHOẢN
              </Link>
            </li>

            <li
              style={
                active === 3
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="profile-card"
                className="nav-link fw-bold menu-link"
                style={
                  active === 3
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(3)}
              >
                THẺ THÀNH VIÊN
              </Link>
            </li>

            <li
              style={
                active === 4
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="profile-card"
                className="nav-link fw-bold menu-link"
                style={
                  active === 4
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(4)}
              >
                ĐIỂM THƯỞNG
              </Link>
            </li>

            <li
              style={
                active === 5
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="profile-card"
                className="nav-link fw-bold menu-link"
                style={
                  active === 5
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(5)}
              >
                THẺ QUÀ TẶNG
              </Link>
            </li>

            <li
              style={
                active === 6
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="profile-card"
                className="nav-link fw-bold menu-link"
                style={
                  active === 6
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(6)}
              >
                VOUCHER
              </Link>
            </li>

            <li
              style={
                active === 7
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="profile-card"
                className="nav-link fw-bold menu-link"
                style={
                  active === 7
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(7)}
              >
                COUPON
              </Link>
            </li>

            <li
              style={
                active === 8
                  ? {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#e71a0f",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
                  : {
                      backgroundImage: `url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/ribon_left-ccc.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#cccccc",
                      backgroundPosition: "left center",
                      marginLeft: "10px",
                      marginBottom: "5px",
                      width: "235px",
                    }
              }
            >
              <Link
                to="profile-card"
                className="nav-link fw-bold menu-link"
                style={
                  active === 8
                    ? {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "white",
                        transition: "all 0s",
                      }
                    : {
                        marginLeft: "10px",
                        fontSize: "12px",
                        color: "#666666",
                        transition: "all 0s",
                      }
                }
                onClick={() => setActive(8)}
              >
                LỊCH SỬ GIAO DỊCH
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
