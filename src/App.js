import "./App.css";
import { useState, useEffect, useRef } from "react";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import { addEnter, showNotification as show } from "./helpers/helpers";

import Form from "./components/Form";

const words = [
  "milk",
  "cookie",
  "noodle",
  "chips",
  "chicken",
  "joelle",
  "jolene",
  "lexie",
  "alexa",
  "uncle",
  "breakfast",
  "dinner",
  "cheese",
  "fish",
  "mummy",
  "daddy",
  "snow",
  "cat",
  "dogs",
  "pizza",
  "clock",
  "holiday",
  "school",
  "nana",
  "amah",
  "bird",
  "ball",
  "kite",
  "water",
  "chocolate",
  "books",
  "television",
  "dinner",
  "lunch",
  "munch",
  "crunch",
  "milk",
  "cheok",
  "puddle",
  "peppa",
  "spaghetti",
  "bread",
  "draw",
  "pink",
  "purple",
  "green",
  "turquoise",
  "fairy",
  "mermaid",
  "bottom",
  "toilet",
  "bath",
  "nuts",
  "eggs",
  "carrot",
  "cabbage",
  "sprinkle",
  "party",
  "presents",
  "birthday",
  "tent",
  "grass",
  "black",
  "red",
  "duck",
  "ghost",
  "monster",
  "boots",
  "shoes",
  "elsa",
  "anna",
  "olaf",
  "teddy",
  "puppet",
  "swim",
  "slide",
  "swing",
  "fat",
  "big",
  "mat",
  "puppy",
  "hair",
  "shoes",
  "boots",
  "karen",
  "joseph",
  "jonnevie",
  "hengky",
  "yellow",
  "candy",
  "water",
  "wiggle",
  "fries",
  "pasta",
  "shower",
  "toilet",
  "giggle",
  "fox",
  "box",
  "mouse",
];

let selectedWord = "";

function App() {
  const [userWord, setUserWord] = useState(null);
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  let enteredWord = null;
  const[showForm, setShowForm] = useState(false)



  const handleSubmit = (e) => {
    console.log("handleSubmit ran");
    e.preventDefault(); // 👈️ prevent page refresh
    const formInput = document.getElementById('user_word');
setUserWord(formInput.value);
    // 👇️ access input values here
//     console.log("userWord 👉️", userWord);
// console.log("enteredWord", enteredWord)
setCorrectLetters([]);
setWrongLetters([]);
    // // 👇️ clear all input values in the form
    // setUserWord("");
  };

  useEffect(() => {
    if (userWord) {
      selectedWord = userWord;
    } else {
      selectedWord = words[Math.floor(Math.random() * words.length)];
    }
  }, [userWord]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if(keyCode === 187 ){
        setShowForm(true)
      } if( keyCode === 189){
        setShowForm(false)
      }

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
      {/* <Form userWord={userWord} setUserWord={setUserWord} /> */}
      {showForm && 
      <div id="chooseWordDiv">
        <form id="chooseWordForm">
          <input
          placeholder="press - to hide"
            id="user_word"
            onChange={(e) => enteredWord = (e.target.value)}
          />
          <button id="chooseWordButton" type="submit" onClick={handleSubmit}>Choose Word</button>
        </form>
      </div>
}
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
