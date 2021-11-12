import React, { Component } from 'react';
import TopCommentsBox from './CommentSectionCopenents/TopCommentsBox/TopCommentsBox'
class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
         }
    }


    render() { 
        return ( 
            <div className='ColHolder'>
            <TopCommentsBox autoFocus={false}/>
            </div>
        );
    }
}
 
export default CommentSection;