import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import classNames from 'classnames/bind';
import styles from './swiper.module.scss';

//
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LayoutImg from './SliderTravel/LayoutImage/layoutImg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const cx = classNames.bind(styles);
export const Slider = ({ slides, spaceBetween, slidesPerView, autoplay }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            autoplay={autoplay}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <div className={cx('layout-img')}>
                        <img className={cx('img')} src={slide.image}></img>
                        <LayoutImg slides={slide} className={cx('layout')} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
