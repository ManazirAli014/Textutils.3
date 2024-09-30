
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
//import About from './components/About';


 
function App() {
  return (
   <>
<Navbar  title="Textutils" />
  <div className="container">
    { <TextForm heading ="Enter the text to analyze"/> }

  </div>
  
   </>
  );
}

export default App;
