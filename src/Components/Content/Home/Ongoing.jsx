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
      <SwiperSlide className="flex h-80 items-center overflow-hidden border-box p-5">
        <div className="w-full h-64 bg-bg46 rounded-xl">
          <OngItem
            imgage={i.images.webp.image_url}
            descript={i.title}
            rate={i.score}
          />
        </div>
        <img
          src={i.images.webp.image_url}
          className="h-auto w-full absolute left-0 blur-md mt-4 mb-4 top-0 -z-10"
        ></img>
      </SwiperSlide>
    );
  });

  return (
    <div className="ongoingSliderWrapper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cards}
        ...
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
