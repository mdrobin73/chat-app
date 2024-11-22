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

            <div className="chat-box-input">
                
            </div>
        </div>
    );
};

export default ChatBox;