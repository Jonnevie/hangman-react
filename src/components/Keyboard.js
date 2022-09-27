import { addEnter, showNotification as show } from "../helpers/helpers";

const MyKeyboard = ({
  setCorrectLetters,
  correctLetters,
  wrongLetters,
  selectedWord,
  setWrongLetters,
  setShowNotification, showForm
}) => {
  let clickedLetter = "";

  const handleClick = (e) => {
    clickedLetter = e.target.value;
    if (selectedWord.includes(clickedLetter)) {
      if (!correctLetters.includes(clickedLetter)) {
        setCorrectLetters((currentLetters) => [
          ...currentLetters,
          clickedLetter,
        ]);
      } else {
        show(setShowNotification);
      }
    }else{
      if (!wrongLetters.includes(clickedLetter)) {
        setWrongLetters((currentLetters) => [...currentLetters, clickedLetter]);
      } else {
        show(setShowNotification);
      }
    }
  };

  return (
    <div id="mobileKeyboard" style={showForm === true ? {display:"none"}  : { display: "block" }}>
      <p className="keyboard">
        <button value="q" onClick={handleClick} style={correctLetters.includes('q') || wrongLetters.includes('q') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          q
        </button>
        <button value="w" onClick={handleClick} style={correctLetters.includes('w') || wrongLetters.includes('w') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          w
        </button>
        <button value="e" onClick={handleClick} style={correctLetters.includes('e') || wrongLetters.includes('e') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          e
        </button>
        <button value="r" onClick={handleClick} style={correctLetters.includes('r') || wrongLetters.includes('r')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          r
        </button>
        <button value="t" onClick={handleClick} style={correctLetters.includes('t') || wrongLetters.includes('t') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          t
        </button>
        <button value="y" onClick={handleClick} style={correctLetters.includes('y') || wrongLetters.includes('y') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          y
        </button>
        <button value="u" onClick={handleClick} style={correctLetters.includes('u') || wrongLetters.includes('u')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          u
        </button>
        <button value="i" onClick={handleClick} style={correctLetters.includes('i') || wrongLetters.includes('i')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          i
        </button>
        <button value="o" onClick={handleClick} style={correctLetters.includes('o') || wrongLetters.includes('o') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          o
        </button>
        <button value="p" onClick={handleClick} style={correctLetters.includes('p') || wrongLetters.includes('p') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          p
        </button>
      </p>
      <p className="keyboard">
        <button value="a" onClick={handleClick} style={correctLetters.includes('a') || wrongLetters.includes('a')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          a
        </button>
        <button value="s" onClick={handleClick} style={correctLetters.includes('s') || wrongLetters.includes('s') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          s
        </button>
        <button value="d" onClick={handleClick} style={correctLetters.includes('d') || wrongLetters.includes('d')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          d
        </button>
        <button value="f" onClick={handleClick} style={correctLetters.includes('f') || wrongLetters.includes('f') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          f
        </button>
        <button value="g" onClick={handleClick} style={correctLetters.includes('g')|| wrongLetters.includes('g')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          g
        </button>
        <button value="h" onClick={handleClick} style={correctLetters.includes('h') || wrongLetters.includes('h')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          h
        </button>
        <button value="j" onClick={handleClick} style={correctLetters.includes('j') || wrongLetters.includes('j')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          j
        </button>
        <button value="k" onClick={handleClick} style={correctLetters.includes('k') || wrongLetters.includes('k')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          k
        </button>
        <button value="l" onClick={handleClick} style={correctLetters.includes('l') || wrongLetters.includes('l')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          l
        </button>
      </p>
      <p className="keyboard">
        <button value="z" onClick={handleClick} style={correctLetters.includes('z') || wrongLetters.includes('z')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          z
        </button>
        <button value="x" onClick={handleClick} style={correctLetters.includes('x') || wrongLetters.includes('x')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          x
        </button>
        <button value="c" onClick={handleClick} style={correctLetters.includes('c')|| wrongLetters.includes('c') ? {backgroundColor:"lightGrey", color:"white"}: {}}>
          c
        </button>
        <button value="v" onClick={handleClick} style={correctLetters.includes('v') || wrongLetters.includes('v')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          v
        </button>
        <button value="b" onClick={handleClick} style={correctLetters.includes('b') || wrongLetters.includes('b')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          b
        </button>
        <button value="n" onClick={handleClick} style={correctLetters.includes('n') || wrongLetters.includes('n')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          n
        </button>
        <button value="m" onClick={handleClick} style={correctLetters.includes('m') || wrongLetters.includes('m')? {backgroundColor:"lightGrey", color:"white"}: {}}>
          m
        </button>
      </p>
    </div>
  );
};

export default MyKeyboard;
