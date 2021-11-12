import React from 'react';
import Message from './CommentSectionCopenents/Message/Message'

function MessageScroll(props){
    return ( 
        <>
        <Message user='Anonymous' editable={false} message = 'NICE VID' likes ={25}/>
        <div className='bottomBar'>
        <div className = 'loader'/>
        </div>
        </>
     );
}
 
export default MessageScroll;