import "./style.css";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

function Chitiet() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // const [movies, setMovies] = React.useState([]);
  // React.useEffect(() => {
  //   fetch("http://localhost:3001/movie/now-showing")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.data.moviesNowShowing);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     });
  // }, []);

  // const params = useParams();
  // const movie = movies.find((movie) => movie.title === params.title);
  // console.log(movie);

  return (
    <div className="page-chitiet">
      <div className="product-view">
        <div className="product-essential">
          <div className="page-title product-view">
            <span className="h1">Nội Dung Phim</span>
          </div>
          <div className="product-name-reponsive">
            <h1>AVATAR: DÒNG CHẢY CỦA NƯỚC</h1>
          </div>
          <div className="product-img-box">
            <div className="product-image product-image-zoom zoom-available">
              <div className="product-image-gallery">
                <img
                  id="image-main"
                  className="gallery-image visible"
                  src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2_payoff_posster_2_.jpg"
                  alt="AVATAR: DÒNG CHẢY CỦA NƯỚC"
                  title="AVATAR: DÒNG CHẢY CỦA NƯỚC"
                />
                {/* <img id="image-0" className="gallery-image" src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar_2__teaser_poster_1_.jpg" data-zoom-image="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar_2__teaser_poster_1_.jpg"/>
                                <img id="image-1" className="gallery-image" src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar_2__teaser_poster_1__2.jpg" data-zoom-image="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar_2__teaser_poster_1__2.jpg"/>
                                <img id="image-2" className="gallery-image" src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_1920x1000_1.jpg" dataZoomImage="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_1920x1000_1.jpg"/>
                                <img id="image-3" className="gallery-image" src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar_2_payoff_posster_2_.jpg" data-zoom-image="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/a/v/avatar_2_payoff_posster_2_.jpg"/> */}
              </div>
            </div>
          </div>
          <div className="product-shop">
            <div className="product-name">
              <span className="h1">AVATAR: DÒNG CHẢY CỦA NƯỚC</span>
            </div>

            {/* Build test  */}
            <div className="movie-director movie-info">
              <label>Đạo diễn: </label>
              <div className="std">&nbsp; James Cameron</div>
            </div>
            <div className="movie-actress movie-info">
              <label cursorshover="true">Diễn viên:</label>
              <div className="std">
                &nbsp; Sam Worthington, Zoe Saldana, Dương Tử Quỳnh,...
              </div>
            </div>
            <div className="movie-genre movie-info">
              <label>Thể loại: </label>
              <div className="std">
                &nbsp; Hành Động, Khoa Học Viễn Tưởng, Phiêu Lưu
              </div>
            </div>
            <div className="movie-release movie-info">
              <label>Khởi chiếu: </label>
              <div className="std">&nbsp; 16/12/2022</div>
            </div>
            <div className="movie-actress movie-info">
              <label>Thời lượng: </label>
              <div className="std">&nbsp; 192 phút</div>
            </div>
            <div className="movie-language movie-info">
              <label>Ngôn ngữ: </label>
              <div className="std">
                &nbsp; Tiếng Anh - Phụ đề Tiếng Việt; Lồng tiếng
              </div>
            </div>
            <div className="movie-rating movie-rated-web">
              <label cursorshover="true">Rated: </label>
              <div className="std">
                &nbsp; C13 - Phim cấm khán giả dưới 13 tuổi
              </div>
            </div>
          </div>
          <div className="movie-detail-fb-booking">
            <ul className="add-to-cart-wrapper">
              <li>
                <button type="button" title="Thích" className="button btn-like">
                  <span>
                    <span>like</span>
                  </span>
                </button>
              </li>

              <li>
                <button
                  type="button"
                  title="Mua vé"
                  className="button btn-booking"
                >
                  <span>
                    <span>Mua vé</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="product-collateral toggle-content tabs-format-cgv">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Chi tiết
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Trailer
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <p>
                Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm
                sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về
                gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những
                rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người
                xâm lược hành tinh Pandora.
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Ru4Jbmh7bcQ"
                title="Avatar 2 - Trailer mới nhất - Vietsub"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chitiet;
