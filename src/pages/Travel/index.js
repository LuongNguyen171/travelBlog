import { Slider } from '~/components/Slider';
import ArrayBanner from '~/components/Slider/SliderTravel';
import classNames from 'classnames/bind';
import styles from './Travel.module.scss';
import TravelBlog from './TraveBlog';

const cx = classNames.bind(styles);
function Travel() {
    return (
        <div className={cx('wraper')}>
            <Slider
                slides={ArrayBanner}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
            />
            <TravelBlog />

            <Slider
                slides={ArrayBanner}
                slidesPerView={3}
                spaceBetween={50}
                // autoplay={{ delay: 2000 }}
            />
        </div>
    );
}

export default Travel;
