import { useState } from "react";
import "./styles.css";

let emojiDictioary = {
  "🏃": "Running",
  "🔥": "Fire",
  "💔": "Broken",
  "🍫": "Chococalate",
  "🏏": "Cricket",
  "☕": "Coffee",
  "⚽️": "football",
  "😡": "angry",
  "😇": "thinking",
  "😱": "shocking"
};
let EmojiWeknow = Object.keys(emojiDictioary);
export default function App() {
  const [Meaning, SetMeaning] = useState("");
  const EmojiFinderFun = (event) => {
    let Emoji = event.target.value;
    let Meaning = emojiDictioary[Emoji];
    if (Meaning === undefined) {
      Meaning = "We dont have this on our database";
    }
    SetMeaning(Meaning);
  };
  const emojiClickHandler = (Emoji) => {
    let Meaning = emojiDictioary[Emoji];
    SetMeaning(Meaning);
  };
  return (
    <div className="App">
      <h1>Emoji Finder</h1>
      <input onChange={EmojiFinderFun}></input>
      <h2> {Meaning}</h2>
      <h2>Emojis We Know</h2>
      {EmojiWeknow.map((Emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(Emoji)}
            key="Emoji"
            style={{ cursor: "pointer", fontSize: "2rem" }}
            key={Emoji}
          >
            {Emoji}
          </span>
        );
      })}
    </div>
  );
}
