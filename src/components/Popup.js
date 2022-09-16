import { useEffect } from "react";
import { checkWin } from "../helpers/helpers";
import Confetti from 'react-confetti'




const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let throwConfetti = false
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let emoji = "";
    let playable = true
if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
    emoji = "😃😃😃"
    finalMessage = `Congratulations! You won!`;
    finalMessageRevealWord = `How did you know that the word was ${selectedWord}?`
    playable = false;
    throwConfetti = true;
} else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ){
    emoji = "🥺🥺🥺"
    finalMessage = 'Good try, but unfortunately,';
    finalMessageRevealWord = `... the word was ${selectedWord}.`;
    playable = false;
}

useEffect(()=>{
    setPlayable(playable)
})

    return ( 
        <>
        
        <div className="popup-container" style={finalMessage !== "" ? {display:'flex'} : {}}>
        {throwConfetti && <Confetti 
      width={2000}
      height={1000}
      />}
      <div className="popup">
        <h2>{emoji}</h2>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
        </>
     );
}
 
export default Popup;