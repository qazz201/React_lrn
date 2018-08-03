import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var data = [
  {
    title: "Name1",
    news: "This is  news number #1"
  },
  {
    title: "Name2",
    news: "This is  news number #2"
  },
  {
    title: "Name3",
    news: "This is  news number #3"
  },
  {
    title: "Name4",
    news: "This is  news number #4"
  }
];

class App extends React.Component {
  render() {
    var dts = data.map(function(elem, pos) {
      return (
        <div key={pos}>
          <p className="App">
            my Title is:{elem.title}
            <br />
            my News is:{elem.news}
          </p>
        </div>
      );
    });
    return dts;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
