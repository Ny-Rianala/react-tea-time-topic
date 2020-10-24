import React, { useState } from "react";


    const AddTopics = () => {
        const [inputValue, setinputValue] = React.useState([]);
        // const [inputResult, setinpuResult] = React.useState([]);
      
        const handleChange = (event) => {
          setinputValue(event.target.value);
        }
      
        const handleSubmit = (event) => {
          event.preventDefault();
          setinputValue(inputValue);
        //   AddTopics.reset()
          console.log("helllooo");
        };
        
        return (
          <form onSubmit={handleSubmit}>
            <h2>Add Topics</h2>
            <label>
              <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button className="submit" type="submit" value="Submit">Submit</button>
            
          </form>
        );
      }



export default AddTopics;