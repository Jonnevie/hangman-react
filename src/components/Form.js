import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
    
const [word, setWord] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        console.log(word);
        const chooseWordForm = document.getElementById("chooseWordForm");
        chooseWordForm.reset();
        
    }
   
    return ( 
        <>
        <form id="chooseWordForm">
        <input type="text" onChange={(e)=>{
            setWord(e.target.value)
        }}/>
        <button onClick={handleClick}>Choose Word</button>
        </form>
        </>
     );
}
 
export default Form;