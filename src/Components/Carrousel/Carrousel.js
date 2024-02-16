// import React, { useState } from 'react';
import AlmaVivaLab from '../Projects/Alma_Viva_Lab';
import Bernigaud from '../Projects/Bernigaud';
import NewProject from '../Projects/New_Project';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carrousel.css'

const element = [<Bernigaud />, <AlmaVivaLab />, <NewProject />]

function Carrousel() {
  return (
    <div className='h-full flex justify-center items-center'>
      <Swiper
        effect={ 'coverflow' }
        grabCursor={ true }
        centeredSlides={ true }
        loop={ true }
        slidesPerView={ '2' }
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }
        }

        className='swiper-container'
        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
        pagination={{el:'.swiper-pagination', clickable: true }}
        navigation={ {
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
          clickable: true,
        }
        }
      >
        {element.map((project, index) => (
          <SwiperSlide key={index}>{project}</SwiperSlide>
        ))}

        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            {/* <ion-icon name="arrow-back-outline"></ion-icon>
            <span>←</span> */}
          </div>
          <div className='swiper-button-next slider-arrow'>
            {/* <ion-icon name="arrow-forward-outline"></ion-icon>
             <span>➡︎</span> */}
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carrousel
