
import './App.css';
import SearchBar from "./Components/SearchBar.js"
import BookData from "./Data.json"

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter The Book Name...." data={BookData}/>
    </div>
  );
}

export default App;
