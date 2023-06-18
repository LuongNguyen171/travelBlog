import classNames from 'classnames/bind';
import styles from './ResultStyle.module.scss';
import {BsFillPlayFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);


function Result({post}) {
    
    const navigate = useNavigate()

    let content = post.content.slice(0, 255) + ' ...';

    return (
        <div className={cx("post-inner")}>
            <div className={cx("post-inner-img")}>
                <img className={cx("post-img")} src={post.img} alt="post"></img>
             </div>
        <div className={cx("post-inner-content")}>
            <h3 className={cx("post-title")} 
                onClick={() => (navigate(`/detailblog/${post.id}`))}>
                {post.title}
            </h3>
            <div className={cx("content")}>
                    <div className={cx('spacing')}></div>
                    <div className={cx("post-date")}>{`${post.date} ᛫ ${(post.comments == 0) ? `ADD A COMMENT` : `${post.comments} COMMENT` }`}</div>
                    <p className={cx("post-content")}>{content}</p>
                    <a className={cx("view-post-link")} href={`/detailblog/${post.id}`}>view post <BsFillPlayFill/></a>
            </div>
        </div>
    </div>
    )
                        
}

export default Result