import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import { Box, Img } from "@chakra-ui/react";

export default function CarouselSlide({imgSrcArray}) {
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        grabCursor= {true}
        className="mySwiper"
        modules={[Autoplay, Pagination]}
      >
        {imgSrcArray.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <Img src={imgSrc} alt={`carousel image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
