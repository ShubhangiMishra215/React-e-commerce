import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { trendingProducts } from '../context/Data';

const TrendingSlider = () => {
  return (
    <div className="slider-container my-5">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100, disableOnInteraction: false }}
        speed={2000}
        breakpoints={{
          0:    { slidesPerView: 2 },
          480:  { slidesPerView: 3 },
          768:  { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {trendingProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img
                src={product.image}
                alt={product.name}
                className="slide-image"
                style={{ width: '180px', height: '180px', objectFit: 'contain' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingSlider;