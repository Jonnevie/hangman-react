import "./App.css";
import { useState, useEffect } from "react";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import { showNotification as show } from "./helpers/helpers";
import Confetti from 'react-confetti'


const words = ["milk", "cookie", "noodle", "chips", "chicken", "joelle", "jolene", "lexie", "alexa", "uncle", "breakfast", "dinner", "cheese", 'fish', 'mummy', 'daddy', "snow", 'cat', 'dogs', 'pizza', 'clock', 'holiday', 'school', 'nana', 'amah', 'bird', 'ball', 'kite', 'water', 'chocolate', 'books', 'television', 'dinner', 'lunch', 'munch', 'crunch', 'milk', 'cheok', 'puddle', 'peppa', 'spaghetti', 'bread', 'draw', 'pink', 'purple', 'green', 'turquoise', 'fairy', 'mermaid', 'bottom', 'toilet', 'bath', 'nuts', 'eggs', 'carrot', 'cabbage', 'sprinkle', 'party', 'presents', 'birthday', 'tent', 'grass', 'black', 'red', 'duck', 'ghost', 'monster', 'boots', 'shoes', 'elsa', 'anna', 'olaf', 'teddy', 'puppet', 'swim', 'slide', 'swing'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
      
    </div>
  );
}

export default App;
