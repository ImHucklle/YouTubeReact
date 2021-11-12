import React, {useRef} from 'react';

function TopCommentsBox (props){

    const message=useRef(null);

    return ( 
        <form>
            <section className="commentBox">
            <input
                    autoFocus={props.autoFocus}
                    type="text"
                    placeholder="Add a public comment..."
                    ref={message}
                    />
            {/* Underline Starts here */}
            <div className="commentLine"></div>
            </section>
        </form>
     );
}
 
export default TopCommentsBox;