import React, {useRef, useState} from 'react';
import './Message.css'
function Message(props){


    const likeIcon = useRef();
    const numLikes = useRef();

    const[arrowUp, setArrowUp] = useState(false);
    const[openReply, setOpenReply] = useState(false);

    //when canel/reply button  press

    const changeOpenReply=() =>{
        setOpenReply(prevState=> prevState = !prevState)
    }
    // toggle arrow up down
    let arrow = <i className='fas fa-caret-down'></i>

    const changeArrow= () => {
        setArrowUp(prevState=> prevState = !prevState)
    }

    if(arrowUp){
        arrow = <i className='fas fa-caret-up'></i>
    }
    else{
        arrow = <i className='fas fa-caret-down'></i>
    }

    const likeComment = () => {}

    const deleteMessage = () => {}




    return(
        <>
        <section className='messageContainer'>
            <div className='messageUser'>{props.user}</div>
            <i className='fas fa-user-cirle'></i>
            <div className='messageText'>{props.message}</div>
            <section className='messageIconsContainer'>
                <i className='fas fa-thumbs-up'></i>
                <div ref = {numLikes}>{props.likes}</div>
                <i className='fas fa-thumbs-down'></i>
                {/* {
                    !props.editable ? (
                        <div onClick={changeOpenReply}
                        style={{cursor:'pointer'}}>REPLY</div>
                    ) : (
                        <div onClick={deleteMessage}
                        style={{cursor: "pointer"}}>DELETE</div>
                    )
                } */}
            </section>
            <section className='arrowReplies' onClick={changeArrow}>
                {arrow}
                <div>View replies</div>
            </section>
        </section>
        </>
    )
}

export default Message;