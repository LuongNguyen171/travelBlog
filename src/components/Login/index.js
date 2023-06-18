import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Login.module.scss';
import { useRef, useEffect } from 'react';

import { useContext, useState } from 'react';
import UserContext from '../Hook/Context';

const cx = classNames.bind(styles);

function Login({ className }) {
    const layoutLogin = useRef(null);
    const handleLogin = useContext(UserContext);

    const [showLogin, setShowLogin] = useState(true);
    useEffect(() => {
        const handeClickOutSide = (event) => {
            if (
                layoutLogin.current &&
                !layoutLogin.current.contains(event.target)
            ) {
                setShowLogin(false);
                handleLogin(showLogin);
            }
        };
        document.addEventListener('click', handeClickOutSide);
        return () => {
            document.removeEventListener('click', handeClickOutSide);
        };
    }, [showLogin]);

    return (
        <div className={cx('wrapper', className)} ref={layoutLogin}>
            <div className={cx('login')}>
                <a className={cx('singup')}>Sign Up</a>
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
                <div>
                    <Button btnGreen small className={cx('btn')}>
                        Register
                    </Button>
                    <Button btnLogin small className={cx('btn')}>
                        sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
