const WrongLetters = ({wrongLetters}) => {
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && <p>Not in the Word</p>}
          {wrongLetters
            .map((letter, i) => <span key={i}>{`${letter} `}</span>)
            }
        </div>
      </div>
    </>
  );
};

export default WrongLetters;
