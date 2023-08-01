import './App.css';
import img1 from "./images/Logo.svg"
import img2 from "./images/Arrow.svg"
import Navbar from "./navbar/Navbar"
import Container from "./container/Container"
import Footer from "./footer/Footer"
import End from "./end/End"
import Costumer from "./costumer/Costumer"
import Questions from "./questions/Questions"
import Humans from "./humans/Humans"
import Question2 from './question2/Question2'
import Contact from "./contact/Contact"
import FooterEnd from "./footer_end/Footer_end"

function App() {
  return (
    <div className="main">
      < Navbar image={img1} />
      < Container image={img2} />
      < Footer />
      < End />
      < Costumer />
      < Questions />
      < Humans />
      < Question2/>
      < Contact/>
      < FooterEnd/>
    </div>
  );
}

export default App;
