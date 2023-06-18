import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './imgFooter/img1.jpg';
import img2 from './imgFooter/img2.jpg';
import img3 from './imgFooter/img3.jpg';
import img4 from './imgFooter/img4.jpg';
import img5 from './imgFooter/img5.jpg';
import img6 from './imgFooter/img6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Footer() {
    const embedCode = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/nTptfu71Ohw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <div className={cx('video_wrapper')}>
                    <img src={img1} className={cx('play')}></img>
                    <FontAwesomeIcon
                        className={cx('incon_play')}
                        icon={faPlay}
                    ></FontAwesomeIcon>
                </div>
                <div className={cx('video_wrapper')}>
                    <img src={img2} className={cx('play')}></img>
                    <FontAwesomeIcon
                        className={cx('incon_play')}
                        icon={faPlay}
                    ></FontAwesomeIcon>
                </div>
                <div className={cx('video_wrapper')}>
                    <img src={img3} className={cx('play')}></img>
                    <FontAwesomeIcon
                        className={cx('incon_play')}
                        icon={faPlay}
                    ></FontAwesomeIcon>
                </div>
                <div className={cx('video_wrapper')}>
                    <img src={img4} className={cx('play')}></img>
                    <FontAwesomeIcon
                        className={cx('incon_play')}
                        icon={faPlay}
                    ></FontAwesomeIcon>
                </div>
                <div className={cx('video_wrapper')}>
                    <img src={img5} className={cx('play')}></img>
                    <FontAwesomeIcon
                        className={cx('incon_play')}
                        icon={faPlay}
                    ></FontAwesomeIcon>
                </div>
                <div className={cx('video_wrapper')}>
                    <img src={img6} className={cx('play')}></img>
                    <FontAwesomeIcon
                        className={cx('incon_play')}
                        icon={faPlay}
                    ></FontAwesomeIcon>
                </div>
            </div>

            <div className={cx('body')}>
                <div className={cx('form')}>
                    <h2 className={cx('title_form')}>SUBSCRIBE</h2>
                    <p className={cx('title_script')}>
                        Never miss a post! Subscribe for Travelista updates and
                        newsletters
                    </p>
                    <Form.Control
                        className={cx('input_form')}
                        size="lg"
                        type="text"
                        placeholder="FIRT NAME"
                    />
                    <Form.Control
                        className={cx('input_form')}
                        size="lg"
                        type="text"
                        placeholder="LAST NALE"
                    />
                    <Form.Control
                        className={cx('input_form')}
                        size="lg"
                        type="text"
                        placeholder="EMAIL ADDRESS"
                    />
                    <button className={cx('btn_go')}>GO</button>
                </div>
                <div className={cx('link_youtobe')}>
                    <div dangerouslySetInnerHTML={{ __html: embedCode }} />
                </div>
            </div>
            <div className={cx('footer_end')}>
                <div className={cx('footer_icon')}>
                    <div className={cx('icon_chill')}>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className={cx('icon')}
                        />
                        <p>3847</p>
                    </div>
                    <div className={cx('icon_chill')}>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className={cx('icon')}
                        />
                        <p>1968</p>
                    </div>
                    <div className={cx('icon_chill')}>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className={cx('icon')}
                        />
                        <p>9807</p>
                    </div>
                    <div className={cx('icon_chill')}>
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className={cx('icon')}
                        />
                        <p>2062</p>
                    </div>
                </div>

                <div className={cx('script')}>
                    <p>
                        COPYRIGHT © 2023 · THE TRAVELISTA ON GENESIS FRAMEWORK ·
                        WORDPRESS · LOG IN
                    </p>
                    <p>COPYRIGHT © 2023 · DESIGN BY GATTO</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
