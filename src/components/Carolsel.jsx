import React from "react";
import { A11y, Pagination, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const img = [
  {
    alt: "certificado1",
    src: "https://static.vecteezy.com/system/resources/previews/026/481/509/non_2x/the-neon-lit-streets-of-a-cyberpunk-anime-night-city-with-this-captivating-4k-wallpaper-generated-ai-free-photo.jpg",
  },
  {
    alt: "certificado2",
    src: "https://wallpapercg.com/download/genshin-impact-5982x4022-10653.jpg",
  },
  {
    alt: "certificado3",
    src: "https://wallpapergod.com/images/hd/cute-anime-4444X2500-wallpaper-s7llqrrqo251u8wh.jpeg",
  },
  {
    alt: "certificado4",
    src: "https://external-preview.redd.it/tEtMj7OaNIYnaP3qRbOu0xHQ-yrfYj2W_rxi3-0uEc4.jpg?auto=webp&s=9c2f07d4197d8367bdaa5f642687027ccac0e9b5",
  },
  {
    alt: "certificado5",
    src: "https://steamuserimages-a.akamaihd.net/ugc/80341092515625392/3B91CEFB1512067F40EC29E45F9AEE0D043130B1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
  },
  {
    alt: "certificado6",
    src: "https://i.scdn.co/image/ab67616d00001e02230ea31d581f72851df12034",
  },
];

const Carolsel = ({ title }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {title}
      </h1>
      <Swiper
         modules={[Pagination, A11y, EffectCoverflow]}
         effect="coverflow"
         slidesPerView={3}
         pagination={{clickable: true}}
         loop={true}
      >
        {img.map((img, ind) => (
          <SwiperSlide key={ind}>
            <img src={img.src} alt={img.alt} style={{width: "400px", height: "300px", objectFit: 'cover'}} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carolsel;
