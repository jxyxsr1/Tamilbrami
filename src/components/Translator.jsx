import React, { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import "../App.css";

const Translator = () => {
  const [model, setModel] = useState(null);
  const [result, setResult] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/uHiHwmYze/";

  // Tamil letters to speech mapping (உயிரெழுத்து 13)
  const tamilSounds = {
    "அ": "ah",
    "ஆ": "aah",
    "இ": "ee",
    "ஈ": "eee",
    "உ": "u",
    "ஊ": "oo",
    "எ": "e",
    "ஏ": "ae",
    "ஐ": "ai",
    "ஒ": "o",
    "ஓ": "oooh",
    "ஔ": "au",
    "ஃ": "ak",
  };

  // Load model once
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tmImage.load(
        MODEL_URL + "model.json",
        MODEL_URL + "metadata.json"
      );
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // 🔹 Speak Tamil Letter
  const speakTamil = (letter) => {
    if (!letter || letter === "❌ கிடைக்கவில்லை") return;

    const utterance = new SpeechSynthesisUtterance();
    utterance.text = tamilSounds[letter] || letter; // English phonetic or fallback
    utterance.lang = "ta-IN"; // Tamil language
    utterance.rate = 0.8; // slower for clarity
    window.speechSynthesis.speak(utterance);
  };

  // Handle file upload + prediction
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !model) return;

    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
    setLoading(true);

    const img = document.createElement("img");
    img.src = imageURL;
    img.onload = async () => {
      const predictions = await model.predict(img);
      const best = predictions.reduce((prev, current) =>
        prev.probability > current.probability ? prev : current
      );

      const detected =
        best.probability > 0.7 ? best.className : "❌ கிடைக்கவில்லை";
      setResult(detected);

      if (detected !== "❌ கிடைக்கவில்லை") {
        speakTamil(detected);
      }

      setLoading(false);
    };
  };

  return (
    <section className="section">
      <h2>பட மொழிபெயர்ப்பு</h2>

      <div className="split-container">
        {/* Input side */}
        <div className="input-box">
          <h3>தமிழ் வட்டெழுத்து</h3>
          <p>உங்கள் படத்தை பதிவேற்றவும்</p>

          <div className="display-box">
            {!selectedImage ? (
              <label className="upload-label">
                படத்தை தேர்ந்தெடுக்கவும்
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            ) : (
              <img src={selectedImage} alt="Uploaded" className="preview-img" />
            )}
          </div>
        </div>

        {/* Result side */}
        <div className="result-box">
          <h3>மொழிபெயர்ப்பு</h3>
          <div className="display-box">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <p
                className={`translation-text ${
                  result === "❌ கிடைக்கவில்லை" ? "error" : ""
                }`}
              >
                {result || "மொழிபெயர்ப்பு இங்கு காணப்படும்"}
              </p>
            )}
          </div>

          {/* 🔊 Speak button */}
          {result && result !== "❌ கிடைக்கவில்லை" && (
            <button
              onClick={() => speakTamil(result)}
              className="speak-btn"
            >
              🔊 கேட்க
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Translator;
