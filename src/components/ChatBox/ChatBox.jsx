import React from 'react';
import "./ChatBox.css"
import assets from '../../assets/assets';

const ChatBox = () => {
    return (
        <div className='chat-box'>
            <div className="chat-box-top">
                <img className='user-img' src={assets.profile_alison} alt="" />
                <p className='user-name'>Alison <img src={assets.green_dot} alt="" /></p>
                <img className='help-img' src={assets.help_icon} alt="" />
            </div>

            <div className="chat-box-messages">
                <div className='receiver-messages'>
                    <div className="msg-receiver">
                        <p className='r-message'>Hi Alison, What are you doing? Do not forget to send me a text</p>
                        <div className='image-time'>
                            <img className='user-image' src={assets.profile_alison} alt="" />
                            <p>1.00 Am</p>
                        </div>
                    </div>

                    <div className="msg-receiver">
                        <img className="msg-image" src={assets.img2} alt="" />
                        <div className='image-time'>
                            <img className='user-image' src={assets.profile_alison} alt="" />
                            <p>1.00 Am</p>
                        </div>
                    </div>
                </div>

                <div className='sender-messages'>
                    <div className="msg-sender">
                        <img className="msg-image" src={assets.img1} alt="" />
                        <div className='image-time'>
                            <img className='user-image' src={assets.profile_richard} alt="" />
                            <p>1.01 Am</p>
                        </div>
                    </div>

                    <div className="msg-sender">
                        <p className='s-message'>Yes, I remember you. I am fine, what about you?</p>
                        <div className='image-time'>
                            <img className='user-image' src={assets.profile_richard} alt="" />
                            <p>1.01 Am</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat-box-input">
                <input type="text" name="" id="" placeholder='Send a message' />

                <label htmlFor="upload-image">
                    <input type="file" name="" id="upload-image" accept='image/png, image/jpeg, image/jpg' hidden />

                    <img src={assets.gallery_icon} alt="" />
                </label>

                <img src={assets.send_button} alt="" />
            </div>
        </div>
    );
};

export default ChatBox;