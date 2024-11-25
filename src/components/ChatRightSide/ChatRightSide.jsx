import React from 'react';
import "./ChatRightSide.css"
import assets from '../../assets/assets';

const ChatRightSide = () => {
    return (
        <div className='chat-rsb'>
            <div className="rsb-profile">
                <img className='rsb-profile-img' src={assets.profile_alison} alt="profile image" />
                <h3>Alison <img src={assets.green_dot} alt="" /></h3>
                <p>Hey there, I am Alison, using Chat App!!!</p>
            </div>

            <div className="rsb-media">
                <h2>Media</h2>
                <div className="saved-media">
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                    <img src={assets.pic1} alt="" />
                    <img src={assets.pic2} alt="" />
                    <img src={assets.pic3} alt="" />
                    <img src={assets.pic4} alt="" />
                </div>
            </div>

            <div className="rsb-bottom">
                <button>Logout</button>
            </div>
        </div>
    );
};

export default ChatRightSide;