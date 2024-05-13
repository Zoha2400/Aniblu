import { useEffect, useState, useRef } from "react";

import "./Home.scss";
import OngItem from "./OngItem";

function Ongoing() {
  // hooks
  const [ongoingHome, setHomeOngoing] = useState([]);
  const sliderWdt = useRef();
  const perpag = useRef();
  const nextpag = useRef();

  useEffect(() => {
    fetch("http://localhost:3001/home_ongoing")
      .then((res) => res.json())
      .then((data) => {
        setHomeOngoing([...data.data]);
      });
    // fetch(`https://api.jikan.moe/v4/anime/${ongoingHome[0].id}/pictures`);
  }, []);

  function pagRight() {
    if (
      sliderWdt.current.scrollLeft == sliderWdt.current.scrollWidth ||
      sliderWdt.current.scrollLeft + 210 > sliderWdt.current.scrollWidth
    ) {
      sliderWdt.current.scrollTo({
        left: (sliderWdt.current.scrollLeft = sliderWdt.current.scrollWidth),
        behavior: "smooth",
      });
    } else {
      sliderWdt.current.scrollTo({
        left: sliderWdt.current.scrollLeft + 210,
        behavior: "smooth",
      });
    }

    setSliderLeft(sliderWdt.current.scrollLeft);
  }
  function pagLeft() {
    if (
      sliderWdt.current.scrollLeft == 0 ||
      sliderWdt.current.scrollLeft - 210 < 0
    ) {
      sliderWdt.current.scrollTo({
        left: (sliderWdt.current.scrollLeft = 0),
        behavior: "smooth",
      });
    } else {
      sliderWdt.current.scrollTo({
        left: sliderWdt.current.scrollLeft - 210,
        behavior: "smooth",
      });
    }

    widthChecker();
    setSliderLeft(sliderWdt.current.scrollLeft);
  }

  // component
  const cards = ongoingHome.map((i) => {
    return (
      <OngItem
        imgage={i.images.webp.image_url}
        descript={i.title}
        rate={i.score}
      />
    );
  });

  return (
    <div className="ongoingSliderWrapper">
      <button ref={perpag} className="pervous pag" onClick={pagLeft}>
        {"<"}
      </button>
      <div ref={sliderWdt} className="Ongoing">
        {cards}
      </div>
      <button nextpag={nextpag} className="next pag" onClick={pagRight}>
        {">"}
      </button>
    </div>
  );
}

export default Ongoing;
