import logo from './logo.svg';
import './App.css';
import Hamburger from './Components/Hamburger';
import SearchBarA from './Components/SearchBarA';

function App() {
  return (
    <div className="App">
      <SearchBarA/>
      <Hamburger color="#d6d6d6"/>
    </div>
  );
}

export default App;
