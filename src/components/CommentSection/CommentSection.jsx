import React, { Component } from 'react';
import './CommentSection.css'
import TopCommentsBox from './CommentsBox/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll';

    function CommentSection() { 
        return ( 
            <div className='ColHolder'>
            <TopCommentsBox autoFocus={false}/>
            <MessageScroll />
            </div>
        );
    }
 
export default CommentSection;