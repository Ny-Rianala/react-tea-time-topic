// import React, { useState } from "react"
// import NextTopics from "./NextTopics";


//     // function AddTopics() {
//     //     const [inputValue, setInputVAlue] = useState("")
        

//     //     return (
//     //         <div>
//     //           <h2>Add Topics</h2>
//     //           <input value={inputValue}
//     //                 onChange={(e) => {
//     //                     if(!e.target.value.includes("r")) {
//     //                     setInputVAlue(e.target.value)
//     //                 }}}
//     //           />
//     //           <button type="submit" onClick= {inputValue && <p>{inputValue}</p> } className="submit">Submit</button>
//     //         </div>
//     //     )
//     // }



//     const AddTopics = () => {
//         const [inputValue, setinputValue] = React.useState([]);
//         // const [inputResult, setinpuResult] = React.useState([]);
      
//         // const handleChange = (event) => {
//         //   setinputValue(event.target.value);
//         //   console.log(event.target.value);
//         // }


      
      
//         return (
//           <form onSubmit={handleSubmit}>
//             <h2>Add Topics</h2>
//             <label>
//               <input type="text" name="add" />
//             </label>
//             <button className="submit" type="submit" value="Submit">Submit</button>  
//           </form>
//         );
//       }




// export default AddTopics;