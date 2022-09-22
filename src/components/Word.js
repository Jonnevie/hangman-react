import { useEffect } from "react";

const Word = ({ selectedWord, correctLetters, showForm }) => {
 

  return (
    <>
      <div className="word" style={showForm === true ? {display:"none"}  : { display: "flex" }}>
        {selectedWord
          .split("")
          .map((letter, i) => {
            return(
            <span className="letter" key={i}>
              {correctLetters.includes(letter) ? letter.toUpperCase() : ""}
            </span>
            )
          })}
      </div>
    </>
  );
};

export default Word;
