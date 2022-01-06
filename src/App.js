import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Alfa" animal="Cat" breed="Tekir" />
      <Pet name="Peyami" animal="Cat" breed="Tekir" />
      <Pet name="Lumos" animal="Cat" breed="Siyamese" /> */}
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
