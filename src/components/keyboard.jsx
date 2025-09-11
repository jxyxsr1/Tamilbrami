import React, { useState } from "react";
import "../App.css";

const Keyboard = () => {
  const [inputText, setInputText] = useState("");
  const [translation, setTranslation] = useState("");

  // Brahmi → Tamil mapping
  const dictionary = {
    "𑀅": "அ", "𑀆": "ஆ", "𑀇": "இ", "𑀈": "ஈ",
    "𑀉": "உ", "𑀊": "ஊ", "𑀏": "எ", "𑀑": "ஐ",
    "𑀒": "ஒ", "𑀓": "ஓ", "𑀔": "ஔ", "𑀕": "க",
    "𑀘": "ச", "𑀢": "த", "𑀦": "ந", "𑀧": "ப",
    "𑀫": "ம",
  };
  
  // Organize keyboard layout in rows
  const keyboardLayout = [
    ["𑀅", "𑀆", "𑀇", "𑀈", "𑀉", "𑀊"],
    ["𑀏", "𑀑", "𑀒", "𑀓", "𑀔"],
    ["𑀕", "𑀘", "𑀢", "𑀦", "𑀧", "𑀫"],
  ];
  const keys = Object.keys(dictionary);
  const handleKeyClick = (char) => {
    const newText = inputText + char;
    setInputText(newText);

    // Convert instantly
    let converted = "";
    for (let c of newText) {
      converted += dictionary[c] || "⬜";
    }
    setTranslation(converted);
  };

  const handleClear = () => {
    setInputText("");
    setTranslation("");
  };

  return (
    <section className="section">
  <h2>தமிழ் வட்டெழுத்து → தமிழ்</h2>

  <div className="split-container">
    {/* Input + Keyboard */}
    <div className="input-box">
      <div className="display-box">{inputText || "𑀅𑀆𑀇 ..."}</div>

      <div className="keyboard">
        {keys.map((key) => (
          <button
            key={key}
            className="key-btn"
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
        <button className="key-btn clear" onClick={handleClear}>
          ⌫ Clear
        </button>
      </div>
    </div>

    {/* Translation */}
    <div className="result-box">
      <h3>மொழிபெயர்ப்பு</h3>
      <div className="display-box">
        {translation || "இங்கே மொழிபெயர்ப்பு தோன்றும்"}
      </div>
    </div>
  </div>
</section>

  );
};

export default Keyboard;
