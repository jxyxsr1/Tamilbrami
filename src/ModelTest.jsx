import React, { useState, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";

const ModelTest = () => {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load the Teachable Machine model when component mounts
  useEffect(() => {
    const loadModel = async () => {
      const modelURL =
        "https://teachablemachine.withgoogle.com/models/uHiHwmYze/model.json";
      const metadataURL =
        "https://teachablemachine.withgoogle.com/models/uHiHwmYze/metadata.json";

      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
      setLoading(false);
    };

    loadModel();
  }, []);

  // Handle file upload
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !model) return;

    const image = document.createElement("img");
    image.src = URL.createObjectURL(file);

    image.onload = async () => {
      const prediction = await model.predict(image);
      setPredictions(prediction);
    };
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Tamil Brami Identifier</h2>

      {loading ? (
        <p>Loading Model... Please wait</p>
      ) : (
        <>
          <input type="file" accept="image/*" onChange={handleFileChange} />

          {predictions.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold">Predictions:</h3>
              <ul>
                {predictions.map((p, index) => (
                  <li key={index}>
                    {p.className}: {(p.probability * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ModelTest;
