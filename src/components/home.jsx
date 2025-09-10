import React from "react";
import Translator from "../components/Translator.jsx"; 
import Keyboard from "../components/Keyboard.jsx";    
import "../../src/home.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* வழிசெலுத்தல் பட்டை */}
      <nav className="navbar">
        <div className="logo">தமிழி</div>
        <div className="nav-links">
          <a href="#image">பட மொழிபெயர்ப்பு</a>
          <a href="#keyboard">விசைப்பலகை மொழிபெயர்ப்பு</a>
          <a href="#about">எங்களைப் பற்றி</a>
        </div>
      </nav>

      {/* தலைப்பு பகுதி */}
      <header className="hero">
        <h1>எளிய தமிழாக்கம்</h1>
        <p>படங்கள் அல்லது தட்டச்சு மூலம் உடனடி மொழிபெயர்ப்பு</p>
      </header>

      {/* முக்கிய உள்ளடக்கம் */}
      <main className="content">
        {/* பட மொழிபெயர்ப்பு */}
        <section id="image" className="card">
          <h2>✦ பட மொழிபெயர்ப்பு</h2>
          <p className="section-desc">
            படத்தை பதிவேற்றவும் அல்லது எடுக்கவும் — உடனடி தமிழாக்கம் பெறுங்கள்
          </p>
          <Translator />
        </section>

        {/* விசைப்பலகை மொழிபெயர்ப்பு */}
        <section id="keyboard" className="card">
          <h2>✦ விசைப்பலகை மொழிபெயர்ப்பு</h2>
          <p className="section-desc">
            நீங்கள் தட்டச்சு செய்யும் உரையை உடனடியாக தமிழில் காணலாம்
          </p>
          <Keyboard />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
