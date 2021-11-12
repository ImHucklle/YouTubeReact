import React, { Component } from 'react';
import TopCommentsBox from './CommentSectionCopenents/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';
import './CommentSection.css'

    function CommentSection() { 
        return ( 
            <div className='ColHolder'>
            <TopCommentsBox autoFocus={false}/>
            <MessageScroll />
            </div>
        );
    }
 
export default CommentSection;