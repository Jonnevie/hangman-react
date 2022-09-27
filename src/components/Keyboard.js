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
        <button value="q" onClick={handleClick} style={wrongLetters.includes('q') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('q') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          q
        </button>
        <button value="w" onClick={handleClick} style={wrongLetters.includes('w') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('w') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          w
        </button>
        <button value="e" onClick={handleClick} style={wrongLetters.includes('e') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('e') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          e
        </button>
        <button value="r" onClick={handleClick} style={wrongLetters.includes('r') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('r') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          r
        </button>
        <button value="t" onClick={handleClick} style={wrongLetters.includes('t') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('t') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          t
        </button>
        <button value="y" onClick={handleClick} style={wrongLetters.includes('y') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('y') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          y
        </button>
        <button value="u" onClick={handleClick} style={wrongLetters.includes('u') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('u') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          u
        </button>
        <button value="i" onClick={handleClick} style={wrongLetters.includes('i') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('i') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          i
        </button>
        <button value="o" onClick={handleClick} style={wrongLetters.includes('o') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('o') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          o
        </button>
        <button value="p" onClick={handleClick} style={wrongLetters.includes('p') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('p') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          p
        </button>
      </p>
      <p className="keyboard">
        <button value="a" onClick={handleClick} style={wrongLetters.includes('a') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('a') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          a
        </button>
        <button value="s" onClick={handleClick} style={wrongLetters.includes('s') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('s') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          s
        </button>
        <button value="d" onClick={handleClick} style={wrongLetters.includes('d') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('d') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          d
        </button>
        <button value="f" onClick={handleClick} style={wrongLetters.includes('f') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('f') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          f
        </button>
        <button value="g" onClick={handleClick} style={wrongLetters.includes('g') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('g') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          g
        </button>
        <button value="h" onClick={handleClick} style={wrongLetters.includes('h') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('h') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          h
        </button>
        <button value="j" onClick={handleClick} style={wrongLetters.includes('j') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('j') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          j
        </button>
        <button value="k" onClick={handleClick} style={wrongLetters.includes('k') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('k') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          k
        </button>
        <button value="l" onClick={handleClick} style={wrongLetters.includes('l') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('l') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          l
        </button>
      </p>
      <p className="keyboard">
        <button value="z" onClick={handleClick} style={wrongLetters.includes('z') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('z') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          z
        </button>
        <button value="x" onClick={handleClick} style={wrongLetters.includes('x') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('x') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          x
        </button>
        <button value="c" onClick={handleClick} style={wrongLetters.includes('c') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('c') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          c
        </button>
        <button value="v" onClick={handleClick} style={wrongLetters.includes('v') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('v') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          v
        </button>
        <button value="b" onClick={handleClick} style={wrongLetters.includes('b') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('b') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          b
        </button>
        <button value="n" onClick={handleClick} style={wrongLetters.includes('n') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('n') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          n
        </button>
        <button value="m" onClick={handleClick} style={wrongLetters.includes('m') ? {backgroundColor:"lightGrey", color:"white"} : correctLetters.includes('m') ? {backgroundColor: "palevioletred", color:"white"} : {}}>
          m
        </button>
      </p>
    </div>
  );
};

export default MyKeyboard;
