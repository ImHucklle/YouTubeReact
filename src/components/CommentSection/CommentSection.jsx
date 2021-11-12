import React, { Component } from 'react';
import TopCommentsBox from './CommentSectionCopenents/TopCommentsBox/TopCommentsBox'
import MessageScroll from './MessageScroll'

    function CommentSection() { 
        return ( 
            <div className='ColHolder'>
            <TopCommentsBox autoFocus={false}/>
            <MessageScroll />
            </div>
        );
    }
 
export default CommentSection;