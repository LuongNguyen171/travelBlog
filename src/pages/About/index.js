import classNames from 'classnames/bind';
import styles from './AboutStyles.css';

import GraphicAbout from '../../assets/GraphicAbout.png'
import EveningStandard from '../../assets/EveningStandard.png'
import Vuelio from '../../assets/Vuelio.png'
import Cosmopolitan from '../../assets/Cosmopolitan.png'
import AvatarEditor from '../../assets/AvatarEditor.jpg'
import Comment from './Comment';
import { comments } from '~/data/comments';

const cx = classNames.bind(styles);
function About() {

    const datas = [
        {
            img: EveningStandard,
            content: "Featured in: The 30 Best Travel Instagram Accounts to Follow in 2018 by the Evening Standard",
        },
        {
            img: Vuelio,
            content: "Listed in: The Top 10 Luxury Travel Blog by Vuelio from 2015-2018",
        },
        {
            img: Cosmopolitan,
            content: "Winner of: Highly Commended Travel Blog at the Cosmopolitan Blog Awards 2014",
        },
    ]

    return (
        <div className={cx('wrapper-about')}>
            <h1 className={cx("title-about")}>About Me</h1>
            <img className={cx("graphic-about")} src={GraphicAbout} alt='GraphicAbout'></img>
            <div className={cx("content-about")}>
                <p className={cx("content-paragaph")}>The Travelista is an award-winning UK blog about luxury travel and stylish living. Created by Jess Gibson in March 2013, The Travelista is now regarded as one of the most influential and established travel blogs in The UK. With a loyal and engaged audience of travel and style lovers, the blog has consecutively been listed as a Top 10 Luxury Travel Blog by Vuelio between 2015-2018.</p>
                <p className={cx("content-paragaph")}>Packed with city guides, stylish hotel reviews and travel shortlists, The Travelista aims to inspire your own trips and arm you with honest and trusted recommendations.  The recent re-design welcomes a new ‘stylish living’ theme to the blog, so as well as Jess’ worldwide adventures, you can also expect to see more content about her life at home in <strong>Yorkshire.</strong></p>
            </div>
            <div  className={cx("pannel-abouts")}>
                {
                    datas.map((data, index) => (
                        <div key={index} className={cx("pannel-about")}>
                            <img  className={cx("pannel-img")} src={data.img}></img>
                            <p className={cx("pannel-content")}>{data.content}</p>
                        </div>
                    ))
                }
            </div>
            <div className={cx("letter")}>
                <img className={cx("letter-img")} src={AvatarEditor}></img>
                <div className={cx("letter-content")}>
                    <h3  className={cx("letter-title")}>Editor's Letter</h3>
                    <p className={cx("letter-content-paragraph")}>Hi guys! Welcome to The Travelista. My name is Jess and I am the Founder and Editor of The Travelista. I live in York, England with my fiance and my son who is now 3.</p>
                    <p className={cx("letter-content-paragraph")}>I first created The Travelista in 2013 as a way to self-publish whilst beginning a career in travel journalism. Almost 10 years on, The Travelista has evolved with me through the various stages of my life; living in London in my early 20's, solo travelling the world in my mid 20's and most recently, becoming a Mum in my late 20's.</p>
                    <p className={cx("letter-content-paragraph")}>As a writer, blogger and content creator I wear many hats, but The Travelista remains true to its roots and will always be first and foremost about travel. Creating The Travelista has transformed my life in ways I could have never imagined and my number one goal is to create a space online that inspires other women to continue to travel, whatever stage of life they may be in.</p>
                    <p className={cx("letter-content-paragraph")}>Thank you for taking the time to find out a little bit about me. I hope you come back again soon!</p>
                    <p className={cx("letter-signature")}>Jess x</p>
                </div>
            </div>
            <div className={cx("comment-wrapper")}>
                <h2 className={cx("title-comment")}>comment</h2>

                {
                    comments.map( (comment, index) => (
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
    );
}

export default About;
