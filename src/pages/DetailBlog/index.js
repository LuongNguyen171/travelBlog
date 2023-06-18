import classNames from 'classnames/bind';
import styles from './DetailBlog.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { blogs } from '~/data/blogs';
import NotFound from '../NotFound';
const cx = classNames.bind(styles);
function DetailBlog() {
    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id == id);

    if (!blog) {
        return <NotFound/>;
    }
    function blogParagraph(content) {
        const paragraphs = content
            .split('\n')
            .map((paragraph, index) => <p key={index}>{paragraph}</p>);
        return <div>{paragraphs}</div>;
    }

    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col-7', 'blog')}>
                    <header className={cx('blog-header')}>
                        <h1 className={cx('blog-title')}>{blog.title}</h1>
                        <p className={cx('blog-meta')}>
                            <span className={cx('blog-time')}>{blog.date}</span>
                            <span> ᛫ </span>
                            <a href="#">{(blog.comments == 0) ? `ADD A COMMENT` : ` ${blog.comments} Comments`}</a>
                        </p>
                    </header>
                    <div className={cx('blog-content')} id='content'>
                        <div>{blogParagraph(blog.content)}</div>
                    </div>
                </div>
                <aside className={cx('col-3', 'sidebar')}>
                    <div className={cx('widget-wrap-1')}>
                        <img src="https://thetravelista.net/wp-content/uploads/2018/07/Travelista-About.png"></img>
                        <p>
                            Jess is an an award-winning UK travel blogger based
                            in North Yorkshire, providing you with inspiration
                            for both local and global adventures.
                        </p>
                        <Link to='/about'>Read more</Link>
                    </div>
                    <div className={cx('widget-wrap-2')}>
                        <h4>Subscribe</h4>
                        <p>Never Miss a Post</p>
                        <form>
                            <input type="text" placeholder="First Name"></input>
                            <input type="text" placeholder="Last Name"></input>
                            <input
                                type="email"
                                placeholder="Email Address"
                            ></input>
                            <input type="submit" value="Go"></input>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default DetailBlog;
