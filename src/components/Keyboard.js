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
        <button value="q" onClick={handleClick}>
          q
        </button>
        <button value="w" onClick={handleClick}>
          w
        </button>
        <button value="e" onClick={handleClick}>
          e
        </button>
        <button value="r" onClick={handleClick}>
          r
        </button>
        <button value="t" onClick={handleClick}>
          t
        </button>
        <button value="y" onClick={handleClick}>
          y
        </button>
        <button value="u" onClick={handleClick}>
          u
        </button>
        <button value="i" onClick={handleClick}>
          i
        </button>
        <button value="o" onClick={handleClick}>
          o
        </button>
        <button value="p" onClick={handleClick}>
          p
        </button>
      </p>
      <p className="keyboard">
        <button value="a" onClick={handleClick}>
          a
        </button>
        <button value="s" onClick={handleClick}>
          s
        </button>
        <button value="d" onClick={handleClick}>
          d
        </button>
        <button value="f" onClick={handleClick}>
          f
        </button>
        <button value="g" onClick={handleClick}>
          g
        </button>
        <button value="h" onClick={handleClick}>
          h
        </button>
        <button value="j" onClick={handleClick}>
          j
        </button>
        <button value="k" onClick={handleClick}>
          k
        </button>
        <button value="l" onClick={handleClick}>
          l
        </button>
      </p>
      <p className="keyboard">
        <button value="z" onClick={handleClick}>
          z
        </button>
        <button value="x" onClick={handleClick}>
          x
        </button>
        <button value="c" onClick={handleClick}>
          c
        </button>
        <button value="v" onClick={handleClick}>
          v
        </button>
        <button value="b" onClick={handleClick}>
          b
        </button>
        <button value="n" onClick={handleClick}>
          n
        </button>
        <button value="m" onClick={handleClick}>
          m
        </button>
      </p>
    </div>
  );
};

export default MyKeyboard;
