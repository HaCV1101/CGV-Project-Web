import "./style.css";
import { Link } from "react-router-dom";
import React from "react";

function MovieNowShowing() {
  //add event click button to show modal
  const handleShow = () => {
    const modal = document.getElementById("exampleModal");
    modal.classList.add("show");
    modal.setAttribute(
      "style",
      "display: block; padding-right: 16px; background-color: rgba(0, 0, 0, 0.9);"
    );
  };

  //add event click button to hide modal
  const handleClose = () => {
    const modal = document.getElementById("exampleModal");
    modal.classList.remove("show");
    modal.setAttribute(
      "style",
      "display: none; padding-right: 0px; background-color: rgba(0, 0, 0, 0.5);"
    );
  };

  //add event when click outside modal to hide modal
  const handleOutsideClick = (e) => {
    if (e.target.id === "exampleModal") {
      handleClose();
    }
  };

  //fetch api to get data
  const [movie, setMovie] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/movie/now-showing")
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.data.moviesNowShowing);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="page-phim">
      <div className="page-title category-title">
        <h1>Phim Đang Chiếu</h1>
      </div>
      <div className="flex-container category-products cgv-movies">
        <ul className="nav flex products-grid products-grid--max-4-col first last odd">
          {movie.map((item, index) => {
            return (
              <li className="film-lists item last " key={index}>
                <span className="nmovie-rating nmovie-rating-c13">C13</span>
                <div className="product-images">
                  <a
                    href="https://www.cgv.vn/default/avatar-2.html"
                    title={item.name}
                    className="product-image"
                    cursorshover="true"
                  >
                    <img
                      id="product-collection-image-4250"
                      src={item.image}
                      alt="AVATAR: DÒNG CHẢY CỦA NƯỚC"
                      cursorshover="true"
                    />
                  </a>
                </div>
                <div
                  className="product-info"
                  style={{
                    minHeight: "0px",
                    maxHeight: "none",
                    height: "121px",
                  }}
                >
                  <h2 className="product-name">
                    <Link to={`/movie/${item.title}`}>{item.name}</Link>
                  </h2>
                  <div className="cgv-movie-info">
                    <span className="cgv-info-bold">Thể loại: </span>
                    <span className="cgv-info-normal">{item.category}</span>
                  </div>
                  <div className="cgv-movie-info">
                    <span className="cgv-info-bold">Thời lượng: </span>
                    <span className="cgv-info-normal">{item.time} phút</span>
                  </div>
                  <div className="cgv-movie-info">
                    <span className="cgv-info-bold">Khởi chiếu:</span>
                    <span className="cgv-info-normal">{item.timeStart}</span>
                  </div>
                </div>
                <ul className="add-to-links">
                  <li>
                    <button
                      type="button"
                      title="Thích"
                      className="button btn-like"
                    >
                      <span>like</span>
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      title="Mua vé"
                      className="button btn-booking"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={handleShow}
                    >
                      MUA VÉ
                    </button>
                    <div
                      className="modal fade "
                      onClick={handleOutsideClick}
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl modal-fullscreen-xl-down modal-dialog-scrollable ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <ul className="toggle-tabs">
                              <li className="tong current">
                                <div className="day ">
                                  <span>01</span>
                                  <em>Mon</em>
                                  <strong>02</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Tue</em>
                                  <strong>03</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Wed</em>
                                  <strong>04</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Thu</em>
                                  <strong>05</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Fri</em>
                                  <strong>06</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sat</em>
                                  <strong>07</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sun</em>
                                  <strong>08</strong>
                                </div>
                              </li>
                              <li className="tong ">
                                <div className="day">
                                  <span>01</span>
                                  <em>Mon</em>
                                  <strong>09</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Tue</em>
                                  <strong>10</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Wed</em>
                                  <strong>11</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Thu</em>
                                  <strong>12</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Fri</em>
                                  <strong>13</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sat</em>
                                  <strong>14</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sun</em>
                                  <strong>15</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Mon</em>
                                  <strong>16</strong>
                                </div>
                              </li>
                              <li className="tong ">
                                <div className="day">
                                  <span>01</span>
                                  <em>Tue</em>
                                  <strong>17</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Wed</em>
                                  <strong>18</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Thu</em>
                                  <strong>19</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Fri</em>
                                  <strong>20</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sat</em>
                                  <strong>21</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sun</em>
                                  <strong>22</strong>
                                </div>
                              </li>
                              <li className="tong ">
                                <div className="day">
                                  <span>01</span>
                                  <em>Mon</em>
                                  <strong>23</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Tue</em>
                                  <strong>24</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Wed</em>
                                  <strong>25</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Thu</em>
                                  <strong>26</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Fri</em>
                                  <strong>27</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sat</em>
                                  <strong>28</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Sun</em>
                                  <strong>29</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Mon</em>
                                  <strong>30</strong>
                                </div>
                              </li>
                              <li className="tong">
                                <div className="day">
                                  <span>01</span>
                                  <em>Tue</em>
                                  <strong>31</strong>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-body">
                            <ul className="toggle-tabs-city">
                              <li className="city current-city">
                                <span>Hồ Chí Minh</span>
                              </li>
                              <li className="city ">
                                <span>Hà Nội</span>
                              </li>
                              <li className="city">
                                <span>Đà Nẵng</span>
                              </li>
                              <li className="city">
                                <span>Cần Thơ</span>
                              </li>
                              <li className="city">
                                <span>Đồng Nai</span>
                              </li>
                              <li className="city">
                                <span>Hải Phòng</span>
                              </li>
                              <li className="city">
                                <span>Quảng Ninh</span>
                              </li>
                              <li className="city">
                                <span>Bà Rịa-Vũng Tàu</span>
                              </li>
                              <li className="city">
                                <span>Bình Định</span>
                              </li>
                              <li className="city">
                                <span>Bình Dương</span>
                              </li>
                              <li className="city">
                                <span>Đắc Lắk</span>
                              </li>
                              <li className="city">
                                <span>Trà Vinh</span>
                              </li>
                              <li className="city">
                                <span>Yên Bái</span>
                              </li>
                              <li className="city">
                                <span>Vĩnh Long</span>
                              </li>
                              <li className="city">
                                <span>Kiên Giang</span>
                              </li>
                              <li className="city">
                                <span>Hậu Giang</span>
                              </li>
                              <li className="city">
                                <span>Hà Tĩnh</span>
                              </li>
                              <li className="city">
                                <span>Phú Yên</span>
                              </li>
                              <li className="city">
                                <span>Đồng Tháp</span>
                              </li>
                              <li className="city">
                                <span>Hưng Yên</span>
                              </li>
                              <li className="city">
                                <span>Khánh Hòa</span>
                              </li>
                              <li className="city">
                                <span>Kon Tum</span>
                              </li>
                              <li className="city">
                                <span>Lạng Sơn</span>
                              </li>
                              <li className="city">
                                <span>Nghệ An</span>
                              </li>
                              <li className="city">
                                <span>Phú Thọ</span>
                              </li>
                              <li className="city">
                                <span>Quảng Ngãi</span>
                              </li>
                              <li className="city">
                                <span>Sóc Trăng</span>
                              </li>
                              <li className="city">
                                <span>Sơn La</span>
                              </li>
                              <li className="city">
                                <span>Tây Ninh</span>
                              </li>
                              <li className="city">
                                <span>Thái Nguyên</span>
                              </li>
                              <li className="city">
                                <span>Tiền Giang</span>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-body type-watch">
                            <ul className="toggle-tabs-type">
                              <li className="type current-type">
                                <span>2D Phụ Đề Việt</span>
                              </li>
                              <li className="type">
                                <span>2D Lồng Tiếng Việt</span>
                              </li>
                              <li className="type">
                                <span>IMAX</span>
                              </li>
                              <li className="type">
                                <span>4DX</span>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MovieNowShowing;
