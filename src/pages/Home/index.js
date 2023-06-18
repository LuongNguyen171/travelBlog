import classNames from 'classnames/bind';
import styles from './HomeStyles.css';
import WinningTravelBlog from './WinningTravelBlog';
import ImageSilder from './ImageSilder';
import Posts from './Posts';
import DestinationsGraphic from '../../assets/DestinationsGraphic.png'
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <ImageSilder/>
            <WinningTravelBlog/>
            <Posts/>
            <img className={cx('destinations-graphic')} src={DestinationsGraphic} alt='DestinationsGraphic'></img>
        </div>
    );
}

export default Home;
