import React, { useState } from "react";
// import ThumbUp from "./ThumbUp.svg"
// import ThumbDown from "./ThumbDown.svg"

function NextTopics({ topic, setTopics, nextTopics }) {
    const [] = useState(topic.upvotes);
    const [] = useState(topic.downvotes);
    
    function increment() {
       topic.upvotes++;
       setTopics([...nextTopics]);
    }

    function decrement() {
        topic.downvotes++;
        setTopics([...nextTopics])
    }



    return(
        <ul className="topicCard">
                {topic.title} 
            <div className="addBtn">
                <div className="addBtn">
                    <h1>{topic.upvotes}</h1>
                    <button className="add" onClick={increment}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none"/><path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/></svg></button>
                   
                    <button className="add" onClick={decrement}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none"/><path d="M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"/></svg></button>
                    <h1>{topic.downvotes}</h1>
                </div>
            </div>
        </ul>
    )
}





export default NextTopics;