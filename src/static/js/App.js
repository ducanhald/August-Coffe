import Header from "./Header";
import Home from "./Home";
import "../css/index.css";
import "../css/grid.css";
import "../css/reponsive.css";
function App() {
  return (
    <div className="App grid wide">
      <Header />
      <Home />
    </div>
  );
}

export default App;
