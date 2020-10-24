import React, { useState } from "react"


    function AddTopics() {
        const [inputValue, setInputVAlue] = useState("")
        

        return (
            <div>
              <h3>Add Topics</h3>
              <input value={inputValue}
                    onChange={(e) => {
                        if(!e.target.value.includes("r")) {
                        setInputVAlue(e.target.value)
                    }}}
              />
              <button type="submit" onClick= {inputValue && <p>{inputValue}</p> } className="submit">Submit</button>
            </div>
        )
    }

export default AddTopics;