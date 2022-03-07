import { BrowserRouter as Router } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Router>
      <div id="app" className="w-full h-screen">
        <h1>NatGas</h1>
        <p>{process.env.REACT_APP_AUTH0_DOMAIN}</p>
      </div>
    </Router>
  );
}

export default App;
