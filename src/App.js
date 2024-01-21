import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/js/dist/dropdown.js";
import Header from "./components/Main-WebPage/Header";
import Body from "./components/Main-WebPage/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <ImageGenerator /> */}
    </div>
  );
}

export default App;
