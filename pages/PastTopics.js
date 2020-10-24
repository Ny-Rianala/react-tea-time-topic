import React from "react"


function PastTopics({ topic }) {
    return(
        <ul className= "topicCard">
            <li>
                {topic.title} 
            </li>
        </ul>
    )
}




export default PastTopics;