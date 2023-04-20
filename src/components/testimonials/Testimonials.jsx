import React from 'react'
import './testimonials.css'
import AVTR1 from '../../components/assets/avatar1.jpg'
import AVTR2 from '../../components/assets/avatar2.jpg'
import AVTR3 from '../../components/assets/avatar3.jpg'
import AVTR4 from '../../components/assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const data =[
  {
    avatar: AVTR1,
    name: 'Tina snow',
    review: 'Fullstack Labs is modernizing the oftware design and coding and building applications for an existing learning management system.The Knowledgeable team is skillfully and effectively the needed technology updates.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Fullstack Labs is modernizing the oftware design and coding and building applications for an existing learning management system.The Knowledgeable team is skillfully and effectively the needed technology updates.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Fullstack Labs is modernizing the oftware design and coding and building applications for an existing learning management system.The Knowledgeable team is skillfully and effectively the needed technology updates.'
  },
  {
    avatar: AVTR4,
    name: 'Nana McBrown',
    review: 'Fullstack Labs is modernizing the oftware design and coding and building applications for an existing learning management system.The Knowledgeable team is skillfully and effectively the needed technology updates.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index}  className="testimonial">
         <div className="client__avatar">
            <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials