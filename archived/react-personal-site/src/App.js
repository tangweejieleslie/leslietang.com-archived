import logo from "./logo.svg";
import profile from "./media/profile_square.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="Section">
          <img src={profile} className="circle-profile" alt="logo" />
          <h1>Leslie Tang</h1>
        </div>
        <div className="Section S2">
          <img src={profile} className="circle-profile" alt="logo" />
          <h1>Leslie Tang</h1>
        </div>
        <div className="Section">
          <img src={profile} className="circle-profile" alt="logo" />
          <h1>Leslie Tang</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
