import React from "react";
//import "./App.css"; // Imports specific css for this component
import Shelves from './Shelves.jsx';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1> Hello, world!</h1>
        <Shelves />
      </div>
    );
  }
}

export default App;
