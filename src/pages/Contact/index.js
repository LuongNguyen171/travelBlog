import classNames from 'classnames/bind';
import styles from './ContactStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { commentsAbout } from '~/data/comments';
import Comment from '../About/Comment';
const cx = classNames.bind(styles);
function Contact() {
    const navigate = useNavigate()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [isSend, setIsSend] = useState(false)
    const [sendSuccessful, SetSendSuccessful] = useState(false)
    const submit = () => {
        setIsSend(true)
        if(email && name && valid(email)) {
            SetSendSuccessful(true);
        }
    }

    const valid = (email) => {
        return email.includes("@gmail.com")
    }

    return (
        <div className={cx('wrapper-contact')}>
            <h1 className={cx("title-contact")}>Contact</h1>
            <div className={cx("contact")}>
                <img className={cx("contact-img")} src='https://thetravelista.net/wp-content/uploads/2017/12/the-travelista-jess-gibson-puglia-ostuni.jpg'></img>
                <form className={cx("contact-form")}>
                    <p>The Travelista is a PR and agency-friendly blog. I love to connect with new brands and fellow travellers, so please get in touch via the contact form below or visit my collaborations page. I will respond to you via email within 48 hours.</p>
                    <label className={cx('lbl-input')}>Your Name (required)</label>
                    <input className={cx('input')} type='text' onChange={(e) => setName(e.target.value)}/>
                    {
                        (isSend) && !(name) && <label className={cx('danger')}>The field is required.</label>
                    }
                    <label className={cx('lbl-input')}>Your Email (required)</label>
                    <input  className={cx('input')} type='email'  onChange={(e) => setEmail(e.target.value)}/>
                    {
                        (isSend) && !(email) && <label className={cx('danger')}>The field is required.</label>
                    }
                    <label className={cx('lbl-input')}>Subject</label>
                    <input className={cx('input')}  type='text'/>
                    <label className={cx('lbl-input')}>Your Message</label>
                    <textarea className={cx('input-area')} typet='text'/>
                    <button type='button' className={cx('btn-submit')} onClick={() => submit()}>Send</button>
                    {
                        (isSend) && (sendSuccessful) && <div className={cx('send-successful')}>Thank you for your message. It has been sent.</div>
                    }
                    {
                        (isSend) && !(sendSuccessful) && <div className={cx('send-failed')}>One or more fields have an error. Please check and try again.</div>
                    }
                </form>
            </div>
            <div className={cx("comment-wrapper")}>
                <h2 className={cx("title-comment")}>comment</h2>

                {
                    commentsAbout.map( (comment, index) => (
                        <div className='comment-inner' key={index}>
                        <Comment name = {comment.name} cmt = {comment.cmt} img = {comment.img} date ={comment.date}/>    
                        {
                            comment.sub.map((rep,index) => (
                                <Comment key={index} name = {rep.name} cmt = {rep.cmt} img = {rep.img} date ={rep.date} sub={true}/>
                            ))
                        }
                        </div>
                    ))
                }
            </div> 
        </div>
    )
}

export default Contact;