import React from "react";
import Translator from "../components/Translator.jsx"; 
import Keyboard from "../components/keyboard.jsx"; 
import "../../src/home.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="logo">தமிழி</div>
        <div className="nav-links">
          <a href="#image"> மொழிபெயர்ப்பு</a>
          <a href="#keyboard">விசைப்பலகை மொழிபெயர்ப்பு</a>
          <a href="#about">எங்களைப் பற்றி</a>
        </div>
      </nav>

      
     <section
  className="mode-section"
  style={{
    display: "flex",        
    gap: "20px",            
    marginLeft: "200px",    
    marginTop: "30px",      
    justifyContent: "center" 
  }}
>
  <div className="mode-box" style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f0f8ff",marginLeft:"80px" }}>
    📝 உரை மொழிபெயர்ப்பு
  </div>
  <div className="mode-box" style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f0f8ff", marginLeft:"80px" }}>
    🖼️ படத்தை பதிவேற்றவும்
  </div>
</section>


      
<main className="content">
        <section id="image" className="card">
           <Translator />
        </section>

     
        <section id="keyboard" className="card">
          <Keyboard />
        </section>
      
</main>

    </div>
  );
};

export default HomePage;
