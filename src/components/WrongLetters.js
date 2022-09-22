const WrongLetters = ({wrongLetters, showForm}) => {
  return (
    <>
      <div className="wrong-letters-container"  style={showForm === true ? {display:"none"}  : { display: "initial" }}>
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
