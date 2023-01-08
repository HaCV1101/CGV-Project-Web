import { Swiper, SwiperSlide } from "swiper/react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Home() {
  return (
    <div>
      <div className="sect-person">
        <ul>
          <li>
            <a
              className="threater"
              href="https://www.cgv.vn/default/cinox/site/"
            >
              cgv threater
            </a>
          </li>
          <li>
            <a
              className="now-sh"
              href="https://www.cgv.vn/default/movies/now-showing.html/"
            >
              now showing
            </a>
          </li>
          <li>
            <a
              className="special"
              href="https://www.cgv.vn/default/theaters/special/gold-class"
            >
              cgv special
            </a>
          </li>
          <li>
            <a
              className="event"
              href="https://www.cgv.vn/default/cinemas/sale/"
            >
              mua voucher, thẻ quà tặng CGV
            </a>
          </li>
          <li>
            <a
              className="ticket requied-login"
              href="https://www.cgv.vn/default/contacts/"
            >
              my ticket infor
            </a>
          </li>
          <li>
            <a className="dc" href="https://www.cgv.vn/default/newsoffer/">
              discount infor
            </a>
          </li>
          <li>
            <a
              className="login-header"
              href="https://www.cgv.vn/default/customer/account/create/"
            >
              create account quick
            </a>
          </li>
        </ul>
      </div>
      <div className=" main-container slideshow-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <a href="https://www.cgv.vn/default/violent-night.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980_x_448__10.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="https://www.cgv.vn/default/nct-dream.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_180.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="https://www.cgv.vn/default/newsoffer/late-shift/">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/l/a/late_shift_-_rolling_banner_980x448.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/tro_t_n_r_c_r__980wx448h.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/tro_t_n_r_c_r__980wx448h.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="https://www.cgv.vn/default/nct-dream.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_180.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
        </Swiper>

        <div className="home-movie-selection">
          <div className="home-title">
            <h2>movie selection</h2>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          id="slider2"
        >
          <SwiperSlide>
            <a href="https://www.cgv.vn/default/violent-night.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/t/r/tro_t_n_r_c_r__poster_ch_nh_th_c_1_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.cgv.vn/default/nct-dream.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.cgv.vn/default/newsoffer/late-shift/">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/d/e/decibel_b_n_4x5_1_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/b/i/bigtrip_for_social_1080x1350_1_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/r/s/rsz_2jai_teaser_-_poster_d_c_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.cgv.vn/default/nct-dream.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/p/o/poster_cdhtl_5_1_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.cgv.vn/default/nct-dream.html">
              <img
                src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/4/x/4x5_main_poster_1_.jpg"
                alt=""
              />
            </a>
          </SwiperSlide>
        </Swiper>

        <div className="product-collateral toggle-content tabs home-event">
          <div className="home-title">
            <h2>event</h2>
          </div>

          <div className="tabs">
            <Tabs
              defaultActiveKey="profile"
              variant="pills"
              id="uncontrolled-tab-example"
              className="mb-3 tabss"
            >
              <Tab eventKey="home" title="Thành Viên CGV">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={5}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/birthday-promo/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/i/birthday_popcorn_box_240x201.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/u22-vn/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/happy-wednesday/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happywednesday240x201_1.jpg" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-culture-day/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/u/culture-240_1.jpg" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-thanh-vien-2023/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_5_.jpg" />
                    </a>
                  </SwiperSlide>
                </Swiper>
              </Tab>

              <Tab eventKey="profile" title="Tin Mới & Ưu Đãi">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={5}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-momo-promo-t10/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_36.jpg" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-msb-promo/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_240x241_1.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-techcombank-promo/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_5.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-ban-viet-bank/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/a/d/adapt_kenh_doi_tac_240x201_1.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-citi-bank-promo/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_7.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/zalopay-promotion-1222/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv_t12_240x201_1.jpg" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/zalopay-promotion-u22/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgvu22-main_240x201_1.jpg" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/ocb-promo/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/g/cgv-omni-240x201_1.png" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a href="https://www.cgv.vn/default/newsoffer/cgv-woori-bank/">
                      <img src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_3.png" />
                    </a>
                  </SwiperSlide>
                </Swiper>
              </Tab>
            </Tabs>
          </div>

          <div className="home-promotion-card">
            <ul className="promos">
              <li className="col-ad">
                <div className="format-border">
                  <a href="https://www.cgv.vn/default/newsoffer/dream-party-package/">
                    <img
                      alt=""
                      src="https://ocwckgy6c1obj.vcdn.cloud/media/wysiwyg/packages/214x245.jpg"
                    />
                  </a>
                </div>
              </li>
              <li className="col-hd">
                <div className="format-border">
                  <a href="https://www.cgv.vn/default/newsoffer/u22-vn/">
                    <img src="https://ocwckgy6c1obj.vcdn.cloud/media/wysiwyg/2022/022022/u22_homepage.jpg" />
                  </a>
                </div>
              </li>
              <li className="col-ad">
                <div className="format-border">
                  <a
                    href="https://www.cgv.vn/default/newsoffer/hall-rental-cgv/"
                    target="_blank"
                  >
                    <img src="https://ocwckgy6c1obj.vcdn.cloud/media/wysiwyg/2021/CGV-DIGITAL-HALL-RENTAL-214x245.png" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
