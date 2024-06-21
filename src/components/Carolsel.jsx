import React from "react";
import { A11y, Pagination, EffectCoverflow, Autoplay, EffectCards } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import './Carolsel.css'

const img = [
  {
    alt: "certificado1",
    src: "https://images2.alphacoders.com/135/1351642.png",
  },
  {
    alt: "certificado2",
    src: "https://images2.alphacoders.com/135/1351642.png",
  },
  {
    alt: "certificado3",
    src: "https://images2.alphacoders.com/135/1351642.png",
  },
  {
    alt: "certificado4",
    src: "https://images2.alphacoders.com/135/1351642.png",
  },
  {
    alt: "certificado5",
    src: "https://images2.alphacoders.com/135/1351642.png",
  },
  {
    alt: "certificado6",
    src: "https://images2.alphacoders.com/135/1351642.png",
  },
];

const Carolsel = ({ title }) => {
  return (
    <div className="carolselContainer">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {title}
      </h1>
      <Swiper
         modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
         effect="coverflow"
         slidesPerView={3}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          
         }}
         pagination={{clickable: true}}
         loop={true}
      >
        {img.map((img, ind) => (
          <SwiperSlide key={ind} style={{position: 'relative'}}>
            <img src={img.src} alt={img.alt} style={{width: "400px", height: "250px", objectFit: 'cover', opacity: '.3'}} />
            <p style={{
              position: "absolute",
              bottom: "50%",
              left: '50%',
              transform: 'translateX(-50%)'
            }}>No certificates currently</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carolsel;
