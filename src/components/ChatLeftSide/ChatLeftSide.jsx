import React from 'react';
import "./ChatLeftSide.css"
import assets from "../../assets/assets"

const ChatLeftSide = () => {
    return (
        <div className='chat-lsb'>
            <div className="lsb-top">
                <div className='logo'>
                    <img src={assets.logo} alt="" />
                </div>
                <div className="menu">
                    <img src={assets.menu_icon} alt="" />
                </div>
            </div>

            {/* Search Friend */}
            <div className="lsb-search">
                <img src={assets.search_icon} alt="" />
                <input type="text" name="" id="" placeholder='Search here...' />
            </div>

            {/* Friend List */}
            <div className="lsb-friend-list">
                {
                    Array(15).fill("").map((item, idx) => (
                        <div key={idx} className="each-friend">
                            <img src={assets.profile_alison} alt="" />
                            <div className="name-msg">
                                <p>Alison</p>
                                <span className='message'>Hi, How are you ?</span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default ChatLeftSide;