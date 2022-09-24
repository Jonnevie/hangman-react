
const Form = ({setUserWord, handleClick }) => {

   
    return ( 

     <div id="chooseWordDiv">
        <form id="chooseWordForm">
          <input
          autoComplete="off"
          placeholder="enter word"
            id="user_word"
            onChange={(e)=>setUserWord((e.target.value).toLowerCase())}
          />
          <button class="chooseWordButton" type="submit" onClick={handleClick}>Choose Word</button>
        </form>
      </div>
     
     );
}
 
export default Form;