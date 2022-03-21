import './App.css';
import Intro from './components/Intro';
import Myprofile from './components/Myprofile';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
function App() {
  return (
    <div className="App">
     <Intro />
     <Myprofile />
     <Projects /> 
     <Contacts /> 
    </div>
  );
}

export default App;
