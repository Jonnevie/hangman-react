const Word = ({ selectedWord, correctLetters }) => {
  return (
    <>
      <div className="word">
        {selectedWord
          .split("")
          .map((letter, i) => {
            return(
            <span className="letter" id={i}>
              {correctLetters.includes(letter) ? letter : ""}
            </span>
            )
          })}
      </div>
    </>
  );
};

export default Word;
