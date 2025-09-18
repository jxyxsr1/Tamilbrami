import React, { useState } from "react";
import "../App.css";

const Keyboard = () => {
  const [inputText, setInputText] = useState("");
  const [compoundKeys, setCompoundKeys] = useState([]);

  // Base layout rows (like your mobile keyboard)
  const baseKeys = [
    ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ"],
    ["எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"],
    ["க", "ச", "ட", "த", "ப", "ம"],
    ["ய", "ர", "ல", "வ", "ழ", "ள"],
    ["ஞ", "ங", "ண", "ந", "ஷ", "ஸ", "ஹ", "க்ஷ"],
  ];

  // Compound letters map (varisai)
  const compoundMap = {
    "க": ["க", "கா", "கி", "கீ", "கு", "கூ", "கெ", "கே", "கை", "கொ", "கோ", "கௌ"],
    "ச": ["ச", "சா", "சி", "சீ", "சு", "சூ", "செ", "சே", "சை", "சொ", "சோ", "சௌ"],
    "ட": ["ட", "டா", "டி", "டீ", "டு", "டூ", "டெ", "டே", "டை", "டொ", "டோ", "டௌ"],
    "த": ["த", "தா", "தி", "தீ", "து", "தூ", "தெ", "தே", "தை", "தொ", "தோ", "தௌ"],
    "ப": ["ப", "பா", "பி", "பீ", "பு", "பூ", "பெ", "பே", "பை", "பொ", "போ", "பௌ"],
    "ம": ["ம", "மா", "மி", "மீ", "மு", "மூ", "மெ", "மே", "மை", "மொ", "மோ", "மௌ"],
    "ய": ["ய", "யா", "யி", "யீ", "யு", "யூ", "யெ", "யே", "யை", "யொ", "யோ", "யௌ"],
    "ர": ["ர", "ரா", "ரி", "ரீ", "ரு", "ரூ", "ரெ", "ரே", "ரை", "ரொ", "ரோ", "ரௌ"],
    "ல": ["ல", "லா", "லி", "லீ", "லு", "லூ", "லெ", "லே", "லை", "லொ", "லோ", "லௌ"],
    "வ": ["வ", "வா", "வி", "வீ", "வு", "வூ", "வெ", "வே", "வை", "வொ", "வோ", "வௌ"],
    "ழ": ["ழ", "ழா", "ழி", "ழீ", "ழு", "ழூ", "ழெ", "ழே", "ழை", "ழொ", "ழோ", "ழௌ"],
    "ள": ["ள", "ளா", "ளி", "ளீ", "ளு", "ளூ", "ளெ", "ளே", "ளை", "ளொ", "ளோ", "ளௌ"],
    "ஞ": ["ஞ", "ஞா", "ஞி", "ஞீ", "ஞு", "ஞூ", "ஞெ", "ஞே", "ஞை", "ஞொ", "ஞோ", "ஞௌ"],
    "ங": ["ங", "ஙா", "ஙி", "ஙீ", "ஙு", "ஙூ", "ஙெ", "ஙே", "ஙை", "ஙொ", "ஙோ", "ஙௌ"],
    "ண": ["ண", "ணா", "ணி", "ணீ", "ணு", "ணூ", "ணெ", "ணே", "ணை", "ணொ", "ணோ", "ணௌ"],
    "ந": ["ந", "நா", "நி", "நீ", "நு", "நூ", "நெ", "நே", "நை", "நொ", "நோ", "நௌ"],
    "ஷ": ["ஷ", "ஷா", "ஷி", "ஷீ", "ஷு", "ஷூ", "ஷெ", "ஷே", "ஷை", "ஷொ", "ஷோ", "ஷௌ"],
    "ஸ": ["ஸ", "ஸா", "ஸி", "ஸீ", "ஸு", "ஸூ", "ஸெ", "ஸே", "ஸை", "ஸொ", "ஸோ", "ஸௌ"],
    "ஹ": ["ஹ", "ஹா", "ஹி", "ஹீ", "ஹு", "ஹூ", "ஹெ", "ஹே", "ஹை", "ஹொ", "ஹோ", "ஹௌ"],
    "க்ஷ": ["க்ஷ", "க்ஷா", "க்ஷி", "க்ஷீ", "க்ஷு", "க்ஷூ", "க்ஷெ", "க்ஷே", "க்ஷை", "க்ஷொ", "க்ஷோ", "க்ஷௌ"],
  };

  // Handle click
  const handleKeyClick = (char) => {
    if (compoundMap[char]) {
      setCompoundKeys(compoundMap[char]); // Show varisai
    } else {
      setInputText((prev) => prev + char); // Add letter
      setCompoundKeys([]); // Close compounds
    }
  };

  // Handle compound key click
  const handleCompoundClick = (char) => {
    setInputText((prev) => prev + char);
  };

  const handleClear = () => {
    setInputText("");
    setCompoundKeys([]);
  };

  return (
    <section className="section">
      <h2>தமிழ் விசைப்பலகை</h2>

      <div className="split-container">
        {/* Display box */}
        <div className="input-box">
          <div className="display-box">{inputText || "இங்கே தட்டச்சு செய்யவும்..."}</div>

          {/* Keyboard */}
          <div className="keyboard">
            {baseKeys.map((row, i) => (
              <div key={i} className="keyboard-row">
                {row.map((key) => (
                  <button
                    key={key}
                    className="key-btn"
                    onClick={() => handleKeyClick(key)}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}

            {/* Compound keys row */}
            {compoundKeys.length > 0 && (
              <div className="keyboard-row compound-row">
                {compoundKeys.map((ckey) => (
                  <button
                    key={ckey}
                    className="key-btn compound"
                    onClick={() => handleCompoundClick(ckey)}
                  >
                    {ckey}
                  </button>
                ))}
              </div>
            )}

            {/* Clear button */}
            <button className="key-btn clear" onClick={handleClear}>
              ⌫ Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keyboard;
