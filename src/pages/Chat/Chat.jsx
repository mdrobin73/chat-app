import React from 'react';
import "./Chat.css"
import ChatLeftSide from '../../components/ChatLeftSide/ChatLeftSide';
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatRightSide from '../../components/ChatRightSide/ChatRightSide';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat-container">
                <ChatLeftSide></ChatLeftSide>
                <ChatBox></ChatBox>
                <ChatRightSide></ChatRightSide>
            </div>
        </div>
    );
};

export default Chat;