import classNames from 'classnames/bind';
import styles from './NotFoundStyle.css';
const cx = classNames.bind(styles);
function NotFound() {
    return (
        <div className={cx('wrapper-not-found')}>
            <h1 className={cx("title-not-found")}>Page Not Found</h1>
        </div>
    )
}

export default NotFound;