import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function Form() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inputBox1')}>
                <input type="Email" required="required" />
                <span className={cx('user')}>Email</span>
            </div>

            <div className={cx('inputBox')}>
                <input type="text" required="required" />
                <span>Username</span>
            </div>

            <div className={cx('inputBox')}>
                <input type="password" required="required" />
                <span>Password</span>
            </div>
        </div>
    );
}

export default Form;
