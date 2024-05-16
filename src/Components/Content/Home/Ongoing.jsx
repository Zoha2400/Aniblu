import { useEffect, useState, useRef } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Home.scss";
import OngItem from "./OngItem";

function Ongoing() {
  // hooks
  const [ongoingHome, setHomeOngoing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/home_ongoing")
      .then((res) => res.json())
      .then((data) => {
        setHomeOngoing([...data.data]);
        console.log(data.data);
      });
  }, []);

  // function pagRight() {
  //   if (
  //     sliderWdt.current.scrollLeft == sliderWdt.current.scrollWidth ||
  //     sliderWdt.current.scrollLeft + 210 > sliderWdt.current.scrollWidth
  //   ) {
  //     sliderWdt.current.scrollTo({
  //       left: (sliderWdt.current.scrollLeft = sliderWdt.current.scrollWidth),
  //       behavior: "smooth",
  //     });
  //   } else {
  //     sliderWdt.current.scrollTo({
  //       left: sliderWdt.current.scrollLeft + 210,
  //       behavior: "smooth",
  //     });
  //   }

  //   setSliderLeft(sliderWdt.current.scrollLeft);
  // }
  // function pagLeft() {
  //   if (
  //     sliderWdt.current.scrollLeft == 0 ||
  //     sliderWdt.current.scrollLeft - 210 < 0
  //   ) {
  //     sliderWdt.current.scrollTo({
  //       left: (sliderWdt.current.scrollLeft = 0),
  //       behavior: "smooth",
  //     });
  //   } else {
  //     sliderWdt.current.scrollTo({
  //       left: sliderWdt.current.scrollLeft - 210,
  //       behavior: "smooth",
  //     });
  //   }

  //   widthChecker();
  //   setSliderLeft(sliderWdt.current.scrollLeft);
  // }

  // component
  const cards = ongoingHome.map((i) => {
    return (
      <SwiperSlide className="flex justify-center items-end overflow-hidden border-box">
        <div className="w-full h-76 mt-40 pb-4 z-20">
          <OngItem
            imgage={i.attributes.posterImage.medium}
            descript={i.attributes.titles.en}
            rate={i.attributes.averageRating}
          />
        </div>
        <div className=" bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900 z-10 absolute w-full h-full"></div>
        <div className=" bg-gradient-to-l from-zinc-900 via-transparent to-zinc-900  z-10 absolute w-full h-full"></div>
        <img
          src={i.attributes.coverImage.small}
          className=" h-full w-auto absolute left-0 mb-4 top-0 -z-10"
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="ongoingSliderWrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={"auto"}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cards}
      </Swiper>
      {/* <button ref={perpag} className="pervous pag">
        {"<"}
      </button> */}
      {/* <div ref={sliderWdt} className="Ongoing">
        {cards}
      </div> */}
      {/* <button nextpag={nextpag} className="next pag">
        {">"}
      </button> */}
    </div>
  );
}

export default Ongoing;
