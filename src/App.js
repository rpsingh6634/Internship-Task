import './App.css';
import Navbar  from './Components/Navbar/Navbar.js';
import Slider from './Components/Slider/Slider.js'



function App() {
  return (
    <div className="App">
      <Navbar/>
     <center><h1 className="hone"><span className="span">Thousands</span> of lives changed</h1></center>
      <center><h4 className="hfour">Hear it from the ones who have been on this journey already</h4></center>
      <Slider/>
      
      </div>
  );
}

export default App;
