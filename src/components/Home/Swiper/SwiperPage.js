import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./SwiperPage.module.scss";
// Import Swiper styles
import "./SwiperEvent.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiper, setSwiper] = useState(null);

  const play = () => {
    swiper.autoplay.start();
    setIsPlaying(true);
  };

  const pause = () => {
    swiper.autoplay.stop();
    setIsPlaying(false);
  };

  return (
    <Swiper
      className={classes.Swiper_Wrap}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      navigation
      pagination={{
        clickable: true,
        el: "#paginationNumber",
        type: "fraction",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={setSwiper}
    >
      <SwiperSlide className={classes.Swiper_Img}>Slide 1</SwiperSlide>
      <SwiperSlide className={classes.Swiper_Img}>Slide 2</SwiperSlide>
      <SwiperSlide className={classes.Swiper_Img}>Slide 3</SwiperSlide>
      <SwiperSlide className={classes.Swiper_Img}>Slide 4</SwiperSlide>
      <div className={classes.Swiper_Buttons}>
        <div className={classes.pagination_num} id="paginationNumber"></div>
        {!isPlaying && (
          <button className={classes.SwiperBtn} onClick={play}>
            {" "}
            <FaPlay />
          </button>
        )}
        {isPlaying && (
          <button className={classes.SwiperBtn} onClick={pause}>
            {" "}
            <FaPause />
          </button>
        )}
      </div>
    </Swiper>
  );
}

export default SwiperPage;
