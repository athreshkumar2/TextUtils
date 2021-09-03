import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
      <Navbar title="Athresh"/>
      <div className="container my-4">
      <Textform heading="Enter The Text to Analyze below"/>
      </div>
    </>
  );
}

export default App;
