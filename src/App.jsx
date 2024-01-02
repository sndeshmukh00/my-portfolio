import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Home"><Navbar /></section>
    <section id="Services">Parallax</section>
    <section id="Portfolio">Services</section>
    <section id="About">Parallax</section>
    <section id="Contact">Portfolio1</section>  
  </div>;
};

export default App;