import React, { useEffect, useState } from "react"
import NextTopics from "./NextTopics"
import PastTopics from "./PastTopics";



const API_URL="https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

function TopicList() {
    const [nextTopics, setTopics] = useState([]);
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
                     {nextTopics.sort((topicA, topicB) => {
                            const ratioA = topicA.upvotes - topicA.downvotes;
                            const ratioB = topicB.upvotes - topicB.downvotes;
                            return ratioB - ratioA;
                     }) 
                    .map(( topic ) => (<NextTopics
                        key={topic.id} topic= {topic} 
                        nextTopics={nextTopics}
                        setTopics={setTopics}
                        />)
                    )}
             </div>
             <div>
             <h2>Past Topics</h2>
                     {pastTopics
                    .filter((topic) => topic.discussedOn)
                    .map(( topic ) => (<PastTopics key={topic.id} topic= {topic} />)
                    )}
            </div>
         </article>
    )
}


export default TopicList;


