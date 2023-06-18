import classNames from 'classnames/bind';
import styles from './CommentStyle.css';

const cx = classNames.bind(styles);
function Comment( {name  ,img , cmt,  date , sub}) {
    let a = (sub) ? "comment sub" : "comment"; 
    return (
        <div className={cx(a)}>
            <div className={cx('actor')}>
                <img className={cx('avatar-actor')} 
                    src={img}
                    alt=''/>
                <div>
                    <h3 className={cx('name-actor')}>{name}</h3>
                    <h4 className={cx('date-actor')}>{date}</h4>
                </div>
            </div>
            <p className={cx('comment-content')}>{
                cmt.split('\n').map( (p,index) =>
                   ( <p key={index}>{p}</p>)
                )
            }</p>
        </div>
    )
}

export default Comment;