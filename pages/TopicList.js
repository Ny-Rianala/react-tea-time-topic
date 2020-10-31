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

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.currentTarget.add.value);
        // const newTopic = {
        //   title: event.currentTarget.add.value,
        // }
        const form = event.currentTarget.add.value;
        console.log(form);

        let newTopic = {
          title: form,
          id: Date.now(),
          discussedOn: "",
          downvotes: 0,
          upvotes: 0,
        }
        
        nextTopics.push(newTopic);
        console.log(nextTopics);
        setTopics([...nextTopics]);
        // setinputValue(inputValue);
      //   AddTopics.reset()
        // console.log(event.target.title);
      };
      


    useEffect(() => {
        getTopics();
    }, [])

    return (
         <article>
             <div>
             <form onSubmit={handleSubmit}>
            <h2>Add Topics</h2>
            <label>
              <input type="text" name="add" />
            </label>
            <button className="submit" type="submit" value="Submit">Submit</button>  
          </form>
             <h2>Next Topics</h2>
                     {nextTopics.sort((topicX, topicY) => {
                            const ratioX = topicX.upvotes - topicX.downvotes;
                            const ratioY = topicY.upvotes - topicY.downvotes;
                            return ratioY - ratioX;
                     }).filter((topic) => !topic.discussedOn) 
                    .map(( topic ) => (<NextTopics
                        key={topic.id} 
                        topic= {topic} 
                        nextTopics= {nextTopics}
                        setTopics= {setTopics}
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


