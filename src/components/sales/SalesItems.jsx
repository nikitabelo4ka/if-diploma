import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper';
import Item from '../itemsByCategory/Item.jsx';
import Title from '../title/Title.jsx';
import 'swiper/css/navigation';
import './salesItems.css';
import 'swiper/css';

function SalesItems() {
  const items = useSelector((state) => state.items.items);

  return (
    <div>
      <Title className="sales-title">
        #MODNIKKY_<b>Sale</b>
      </Title>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Item key={item.id} data={item} price="sale" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SalesItems;
