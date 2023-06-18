// import Post1 from '../../../assets/blog1.jpg'
// import Post2 from '../../../assets/post2.jpg'
// import Post3 from '../../../assets/post3.jpg'
// import Post4 from '../../../assets/post4.jpg'
// import Post5 from '../../../assets/post5.jpg'
// import Post6 from '../../../assets/post6.jpg'
// import Post7 from '../../../assets/post7.jpg'
// import Post8 from '../../../assets/post8.jpg' 

import {BsFillPlayFill} from "react-icons/bs";
import classNames from 'classnames/bind';
import styles from './PostsStyle.module.scss';
import { posts } from "~/data/posts";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Posts() {

    const navigate = useNavigate()

    return (
        <div className={cx("post-wrapper")}>
            {
                posts.map((post, index) => {
                    if (post.id % 2 != 0) {
                        return (
                            <div className={cx("post-inner")} key={index}>
                               <div className={cx("post-inner-img")}>
                                    <img className={cx("post-img")} src={post.img} alt="post"></img>
                               </div>
                                <div className={cx("post-inner-content")}>
                                    <h3 className={cx("post-title")} 
                                        onClick={() => (navigate(`/detailblog/${post.id}`))}>
                                        {post.title}
                                        </h3>
                                    <div className={cx("post-content")}>
                                            <div className={cx('spacing')}></div>
                                            <div className={cx("post-date")}>{post.date}</div>
                                            <p className={cx("post-content")}>{post.content}</p>
                                            <a className={cx("view-post-link")} href={`/detailblog/${post.id}`}>VIEW POST <BsFillPlayFill/></a>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className={cx("post-inner")} key={index}>
                                <div className={cx("post-inner-content")}>
                                <h3 className={cx("post-title")} 
                                        onClick={() => (navigate(`/detailblog/${post.id}`))}>
                                        {post.title}
                                        </h3>
                                    <div className={cx("post-content")}>
                                            <div className={cx('spacing')}></div>
                                            <div className={cx("post-date")}>{post.date}</div>
                                            <p className={cx("post-content")}>{post.content}</p>
                                            <a className={cx("view-post-link")} href={`/detailblog/${post.id}`}>view post <BsFillPlayFill/></a>
                                    </div>
                                </div>
                                <div className={cx("post-inner-img")}>
                                    <img className={cx("post-img")} src={post.img} alt="post"></img>
                               </div>
                            </div>
                        )
                    }
                    
                })
            }
            <button className={cx("btn-read-more-post")}
                    onClick={() => (navigate('./blogs'))}
                >Read more post</button>
        </div>
    )
}

export default Posts;