import React from "react";
import TopicList from "./TopicList";
import AddTopics from "./AddTopics";
 
function App() {
    return(
        <div>
             <h1>Tea Time Topics</h1>
             <AddTopics />
             <TopicList />
        </div>
    )
}


export default App;