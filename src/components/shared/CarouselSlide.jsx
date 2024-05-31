import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { Box, Img } from "@chakra-ui/react";

export default function CarouselSlide({imgSrcArray}) {
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        grabCursor= {true}
        className="mySwiper"
        modules={[Autoplay]}
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
