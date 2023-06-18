import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../../assets/slide1.png'
import Slide2 from '../../../assets/slide2.jpg'
import Slide3 from '../../../assets/slide3.jpg'
import {BsFillPlayFill} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';  

import classNames from 'classnames/bind';
import styles from './ImageSliderStyles.css';

const cx = classNames.bind(styles);

function ImageSilder() {

  const slides = [
    {
      id: 11,
      title: "REVIEW: A RESTORATIVE SPA BREAK AT GRANTLEY HALL, NORTH YORKSHIRE",
      content: "Grantley Hall reopened in 2019 following £72m of investment and 4 years of renovation. Since then it has created a ...",
      img: Slide1
    },
    {
      id: 12,
      title: "MEDITERRANEAN CRUISE ITINERARY: VISITING 6 PORTS IN 7 DAYS",
      content: "We’ve just got back from an amazing 7 day Mediterranean cruise with Princess Cruises. This was my third cruise, and the first ...",
      img: Slide2
    },
    {
      id: 13,
      title: "FAMILY-FRIENDLY GLAMPING IN THE LAKE DISTRICT WITH FEATHER DOWN FARMS",
      content: "My family and I recently travelled to the beautiful Lake District for a unique 3 night glamping experience with Feather Down ...",
      img: Slide3
    },
  ]

  return (
    <Carousel>
      {
        slides.map((slide, index) => (
          <Carousel.Item  key={index}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt="First slide"
            />
          <Carousel.Caption >
            {/* <h3>{slide.title}</h3>
            <p>{slide.content}</p> */}
            <div className={cx('view-post')}>
              <h3  className={cx('view-post-title')}>{slide.title}</h3>
              <p  className={cx('view-post-content')}>{slide.content}</p>
              <a  className={cx('view-post-link')} href={`/detailblog/${slide.id}`}>View post <BsFillPlayFill/></a>
    
            </div>
          </Carousel.Caption>
          </Carousel.Item>
          
        ))
      }
    </Carousel>
  )

}

export default ImageSilder;