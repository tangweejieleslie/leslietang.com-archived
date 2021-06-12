import logo from "./logo.svg";
import profile from "./media/profile_square.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
      <img src={profile} className="circle-profile" alt="logo" />
      <h1>
        Leslie Tang
      </h1>
        
      </div>
    </div>
  );
}

export default App;
