import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './LayoutImg.module.scss';
const cx = classNames.bind(styles);
function LayoutImg({ slides, className }) {
    return (
        <div className={className}>
            <div className={cx('wraper')}>
                <h3>{slides.title}</h3>
                <p>{slides.content}</p>
                <div className={cx('view-port')}>
                    <p className={cx('view')}>VIEW PORT</p>
                    <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default LayoutImg;
