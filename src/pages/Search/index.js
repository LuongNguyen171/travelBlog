import classNames from 'classnames/bind';
import styles from './SearchStyle.module.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { blogs } from '~/data/blogs';
import NotFound from '../NotFound';
import Result from './Result';
const cx = classNames.bind(styles);
function Search() {

    const {key} = useParams()

    let posts = [] 

    const addData = (blog) => {
        if(blog.title.includes(key) || blog.content.includes(key)){
            posts.push(blog)
        }
    }

    blogs.forEach((blog) => addData(blog))

    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col-7', 'blog')}>
                    <h1 className={cx('tilte-result')}>{`Search result for: ${key}`}</h1>
                    {
                        posts.map((post, index) => (
                            <Result key={index}
                                post = {post}
                            />
                        ))
                    }
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
    )
}

export default Search;