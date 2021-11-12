import React, {useRef, useState} from 'react';
import '../CommentBox.css'

function TopCommentsBox (props){

    const message=useRef(null);

    const[showCommentLine, setCommentLine] = useState(false);

    const[showButtons, setShowButtons] = useState(false);

    const[enableBtn, setEnableBtn] = useState(true);

    const commentFocus = () =>{
        setCommentLine(true);
        setShowButtons(true);
    }

    const commentFocusOut = () => {
        setCommentLine(false);
    }

    const commentStroke = event => {
        let currentMessage = event.target.value;
        if(currentMessage){
            setEnableBtn(false);
        }
        else{
            setEnableBtn(true)
        }
    }

    const sendComment = (event) => {
        event.preventDefault();
    }







    return ( 
        <form>
            <section className="commentBox">
            <input
                    autoFocus={props.autoFocus}
                    type="text"
                    placeholder="Add a public comment..."
                    ref={message}
                    onFocus={commentFocus}
                    onBlur={commentFocusOut}
                    onKeyUp={commentStroke}
                    />
            {/* Underline Starts here */}
            {showCommentLine && <div className="commentLine"></div>}
            </section>
            {showButtons && (
                <>
                <button className='commentButton sendButton' disabled={enableBtn} onClick={sendComment} >COMMENT</button>
                <button className="commentButton" style={{color: "gray", backgroundColor:"transparent"}} 
                onClick={() =>{
                    setShowButtons(false);
                    message.current.value =""
                }}>CANCEL</button>

                

                </>
            )}
        </form>
     );
}
 
export default TopCommentsBox;