import React, { useEffect, useState } from "react"
import NextTopics from "./NextTopics"
import PastTopics from "./PastTopics";



const API_URL="https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

function TopicList() {
    const [Topics, setTopics] = useState([]);
    const [pastTopics, setPastTopics] = useState([])


    const getTopics = async () => {
        try {
            const res = await fetch(API_URL)
            const topics = await res.json();
            setTopics(topics);
            setPastTopics(topics);
            console.log(topics);
        }catch (e) {
            console.error(e);
        }
       
    }


    useEffect(() => {
        getTopics();
    }, [])

    return (
         <article>
             <div>
             <h2>Next Topics</h2>
                     {Topics
                    .filter((topic) => !topic.discussedOn)
                    .map(( topic ) => (<NextTopics key={topic.id} topic= {topic} />)
                    )}
            </div>
         </article>
    )
}


export default TopicList;


