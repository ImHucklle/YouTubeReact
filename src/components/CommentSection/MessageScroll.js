import React from 'react';
import Message from './CommentSectionCopenents/Message/Message'

function MessageScroll(props){
    return ( 
        <>
        <Message />
        <div className='bottomBar'>
        <div className = 'loader'/>
        </div>
        </>
     );
}
 
export default MessageScroll;