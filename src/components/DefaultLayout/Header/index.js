import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//
import { useContext } from 'react';
import UserContext from '~/components/Hook/Context';

const cx = classNames.bind(styles);
function Header({ className }) {

    const [search, setSearch] = useState()
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true);
    // const handleLogin = () => {
    //     setShowLogin(true);
    // };
    const handleLogin = useContext(UserContext);

    const handleStateLogin = () => {
        setIsLogin(!isLogin);
        handleLogin(isLogin);
    };
    return (
        <div className={cx('wrapper', className)}>
            <header className={cx('header')}>
                <nav className={cx("navbar")}>
                    <ul className={cx('navbar-menu')}>
                        <li>
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>
                        <li>
                            <Link to={'/shop'}>Shop</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className={cx('user-action')}>
                    
                   <div className={cx('search')}>
                   <input  
                        className={cx('input-search')}
                        type='text' placeholder='search'
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <FontAwesomeIcon
                        className={cx('icon-search')}
                        icon={faMagnifyingGlass}
                        onClick={()=>{
                            let link = (search) ? `/search/${search}` : `/search`;
                            navigate(link)
                        }}
                    ></FontAwesomeIcon>
                   </div>
            
                    <Button btnLogin small onClick={handleStateLogin}>
                        Login
                    </Button>
                </div>
            </header>
        </div>
    );
}

export default Header;
