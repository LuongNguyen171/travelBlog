import classNames from 'classnames/bind';
import styles from './TravelBlog.module.scss';
const cx = classNames.bind(styles);

function TravelBlog() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('blog')}>
                <div className={cx('blog-img')}>
                    <img src="https://thetravelista.net/wp-content/uploads/2018/10/hotel-excelsior-interiors-room-dubrovnik-1000x1000.jpg"></img>
                </div>
                <div className={cx('content-blog')}>
                    <div className={cx('content-layout')}>
                        <p>
                            5 WAYS TO MAKE YOUR BEDROOM FEEL LIKE A 5 STAR HOTEL
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('blog')}>
                <div className={cx('blog-img')}>
                    <img src="https://thetravelista.net/wp-content/uploads/2018/10/hotel-excelsior-interiors-room-dubrovnik-1000x1000.jpg"></img>
                </div>
                <div className={cx('content-blog')}>
                    <div className={cx('content-layout')}>
                        <p>
                            5 WAYS TO MAKE YOUR BEDROOM FEEL LIKE A 5 STAR HOTEL
                        </p>
                    </div>
                </div>
            </div>

            <div className={cx('blog')}>
                <div className={cx('blog-img')}>
                    <img src="https://thetravelista.net/wp-content/uploads/2018/10/hotel-excelsior-interiors-room-dubrovnik-1000x1000.jpg"></img>
                </div>
                <div className={cx('content-blog')}>
                    <div className={cx('content-layout')}>
                        <p>
                            5 WAYS TO MAKE YOUR BEDROOM FEEL LIKE A 5 STAR HOTEL
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelBlog;
