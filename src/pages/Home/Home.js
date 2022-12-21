import { Swiper, SwiperSlide } from "swiper/react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Home() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // style={{ width: "70%", height: "100%" }}
      >
        <SwiperSlide>
          <a href="https://www.cgv.vn/default/violent-night.html">
            <img
              // style={{ width: "70%", height: "100%" }}
              src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980_x_448__10.jpg"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cgv.vn/default/nct-dream.html">
            <img
              src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_180.jpg"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.cgv.vn/default/newsoffer/late-shift/">
            <img
              src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/l/a/late_shift_-_rolling_banner_980x448.jpg"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/tro_t_n_r_c_r__980wx448h.jpg"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="https://ocwckgy6c1obj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/tro_t_n_r_c_r__980wx448h.jpg"
              alt=""
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
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
            <Tab eventKey="home" title="Thanh vien CGV">
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

            <Tab eventKey="profile" title="Tin moi & Uu dai">
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
      </div>
    </>
  );
}
