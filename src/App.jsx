import "./App.css";
import reactionIcon from "./assets/images/icon-reaction.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVisual from "./assets/images/icon-visual.svg";
function App() {
  return (
    <div className="container">
      <Main />
    </div>
  );
}

export default App;

function Main() {
  return (
    <div className="main">
      <div className="left">
        <h1>Your Result</h1>
        <div className="circle">
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
      <div className="right">
        <h2>Summary</h2>
        <div className="subject-section">
          <div className="subject">
            <div className="flex">
              <img src={reactionIcon} alt="" />
              <h3>Reaction</h3>
            </div>
            <p>
              80<span>/100</span>
            </p>
          </div>
          <div className="subject">
            <div className="flex">
              <img src={iconMemory} alt="" />
              <h3>Memory</h3>
            </div>
            <p>
              92<span>/100</span>
            </p>
          </div>
          <div className="subject">
            <div className="flex">
              <img src={iconVerbal} alt="" />
              <h3>Verbal</h3>
            </div>
            <p>
              61<span>/100</span>
            </p>
          </div>
          <div className="subject">
            <div className="flex">
              <img src={iconVisual} alt="" />
              <h3>Visual</h3>
            </div>
            <p>
              72<span>/100</span>
            </p>
          </div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}
