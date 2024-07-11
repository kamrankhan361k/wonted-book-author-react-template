
import GLightbox from "glightbox";
import React, { useEffect } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/chapterPreview.json";

const ChapterPreview = ({ isBg }) => {
  const { chapterPreview } = data;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox2",
      slideEffect: "zoom",
    });
  }, []);

  return (
    // <!-- ========== Chapter preview section start ========== -->
    <section
      id="preview"
      className={`section-padding chapter-preview ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{chapterPreview.title}</span>
              <h2 className="display-6">{chapterPreview.subtitle}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>

        <div className="row testi-row">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {chapterPreview.chapters.map((data, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide p-5px-lr translateEffect2">
                    <a
                      href={data.image}
                      className="glightbox2"
                      data-glightbox={`description: .custom-desc${i}; descPosition: right;`}
                    >
                      <img
                        className="chapter-img img-fluid"
                        src={data.image}
                        alt={data.title}
                      />
                    </a>
                    <div className={`glightbox-desc custom-desc${i}`}>
                      <h3 className="mb-4 text-center">{data.title}</h3>
                      <p className="first-letter">{data.text1}</p>
                      <p>{data.text2}</p>
                      <p>{data.text3}</p>
                      <p>{data.text4}</p>
                      <p>{data.text5}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Chapter preview section end ========== -->
  );
};

export default ChapterPreview;
