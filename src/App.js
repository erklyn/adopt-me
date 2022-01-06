import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, `Adopt Me!`),
    React.createElement(Pet, {
      name: "Lumos",
      animal: "Cat",
      breed: "Siyamese",
    }),
    React.createElement(Pet, { 
      name: "Peyami",
      animal: "Cat",
      breed: "Tekir",
    }),
    React.createElement(Pet, { 
      name: "Alfa",
      animal: "Cat",
      breed: "Tekir",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
