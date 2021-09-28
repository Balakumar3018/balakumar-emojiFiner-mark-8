import { useState } from "react";
import "./styles.css";

var emojiDictioary = {
  "🏃": "Running",
  "🔥": "Fire",
  "💔": "Broken",
  "🍫": "Chococalate",
  "🏏": "Cricket",
  "☕": "Coffee"
};
var EmojiWeknow = Object.keys(emojiDictioary);
export default function App() {
  const [Meaning, SetMeaning] = useState("");

  function EmojiFinderFun(event) {
    var Emoji = event.target.value;
    var Meaning = emojiDictioary[Emoji];
    if (Meaning === undefined) {
      Meaning = "We dont have this on our database";
    }
    SetMeaning(Meaning);
  }
  function emojiClickHandler(Emoji) {
    var Meaning = emojiDictioary[Emoji];
    SetMeaning(Meaning);
  }
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
