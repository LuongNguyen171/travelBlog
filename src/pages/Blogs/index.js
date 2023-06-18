import classNames from 'classnames/bind';
import styles from './Blogs.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NotFound from '../NotFound';
import { blogs } from '~/data/blogs';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Blogs() {
    useEffect(() => {
       if(page <= count){
        const a = document.getElementById(`${page}`);
        a.classList.add(cx('active'))
       }
      },[]);
    const navigate = useNavigate();
    let { page } = useParams();
    page = (page) ? parseInt(page) : 1 ;  
    let count = (blogs.length / 10);
    count = (Math.round(count) == count) ? count : Math.round(count) + 1;
    const nextpage = page + 1;
    const prevpage = page - 1;
    if (page > count) {
        return <NotFound/>;
    }
    let x = (page - 1) * 10, y = page * 10 - 1;
    let data = []
    for (let i = x; i <= y; i++) {
       if(blogs[i]){
            data.push(blogs[i]); 
       }   
    }
    return (
        <div className={cx('container')}>
            <div>
                {data.map((blog, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div className={cx('row', 'pt-5')} key={index}>
                                <div className={cx('col-6')}>
                                    <div className={cx('blog')}>
                                        <div
                                            className={cx('blog-img')}
                                            onClick={() => {
                                                navigate(
                                                    `/detailblog/${blog.id}`,
                                                );
                                                
                                            }}
                                        >
                                            <a>
                                                <img
                                                    src={blog.img}
                                                    alt={blog.title}
                                                ></img>
                                            </a>
                                        </div>
                                        <h2 className={cx('blog-title')}>
                                            <a
                                                className={cx(
                                                    'blog-title-link',
                                                )}
                                                onClick={() => {
                                                    navigate(
                                                        '/detailblog/' +
                                                            blog.id,
                                                    );
                                                    // window.scrollTo(0, 0);
                                                }}
                                            >
                                                {blog.title}
                                            </a>
                                        </h2>
                                        <p className={cx('blog-meta')}>
                                            <span className={cx('blog-time')}>
                                                {blog.date}
                                            </span>
                                            <span> ᛫ </span>
                                            <a
                                                href="#"
                                                className={cx('blog-comment')}
                                            >
                                                {blog.comments === 0 ? (
                                                    <p>Add a comment</p>
                                                ) : (
                                                    <p>
                                                        {blog.comments} comments
                                                    </p>
                                                )}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('col-6')}>
                                    <div className={cx('blog')}>
                                        <div
                                            className={cx('blog-img')}
                                            onClick={() => {
                                                navigate(
                                                    '/detailblog/' +
                                                        blogs[index + 1].id,
                                                );
                                                // window.scrollTo(0, 0);
                                            }}
                                        >
                                            <a>
                                                <img
                                                    src={blogs[index + 1].img}
                                                    alt={blogs[index + 1].title}
                                                ></img>
                                            </a>
                                        </div>
                                        <h2 className={cx('blog-title')}>
                                            <a
                                                className={cx(
                                                    'blog-title-link',
                                                )}
                                                onClick={() => {
                                                    navigate(
                                                        '/detailblog/' +
                                                            blogs[index + 1].id,
                                                    );
                                                    // window.scrollTo(0, 0);
                                                }}
                                            >
                                                {blogs[index + 1].title}
                                            </a>
                                        </h2>
                                        <p className={cx('blog-meta')}>
                                            <span className={cx('blog-time')}>
                                                {blogs[index + 1].date}
                                            </span>
                                            <span> ᛫ </span>
                                            <a className={cx('blog-comment')}>
                                                {blogs[index + 1].comments ===
                                                0 ? (
                                                    <p>Add a comment</p>
                                                ) : (
                                                    <p>
                                                        {
                                                            blogs[index + 1]
                                                                .comments
                                                        }{' '}
                                                        comments
                                                    </p>
                                                )}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className={cx('pagination')}>
                <ul>
                    {
                        (page == 1) ? <li></li> :  <li className={cx('pagination-nextpage')}>
                        <a href={`/blogs/${prevpage}`}>⟨⟨ Prev</a>
                        </li>
                    }
                    <li id='1'>
                        <a href="/blogs/1">1</a>
                    </li>
                    <li id='2'>
                        <a href="/blogs/2">2</a>
                    </li>
                    <li id='3'>
                        <a href="/blogs/3">3</a>
                    </li>
                    {
                        (page == count) ? <li></li> :  <li className={cx('pagination-nextpage')}>
                        <a href={`/blogs/${nextpage}`}>Next ⟩⟩</a>
                        </li>
                    }
                    {/* <li className={cx('pagination-nextpage')}>
                        <a href={`/blogs/${nextpage}`}>Next Page »</a>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Blogs;
