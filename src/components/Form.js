
import { useState } from "react";

const Form = ({userWord, setUserWord}) => {
let enteredWord = "";

    const handleClick = (e) => {
        e.preventDefault();
        const chooseWordForm = document.getElementById("chooseWordForm");
        chooseWordForm.reset();
    }
   
    return ( 
        <>
        <form id="chooseWordForm" onSubmit={setUserWord(enteredWord)}>
        <input type="text" onChange={(e)=>{
            enteredWord = (e.target.value)
        }}/>
        <button type="submit" onClick={handleClick}>Choose Word</button>
        </form>
        </>
     );
}
 
export default Form;