import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Css from "./css";
import "./index.css";

function App() {
  const [ind, setind] = useState(0);

  const getQuotes = async () => {
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/quotes");
    } catch (error) {}
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div>
      {/* <button onClick={() => setind(ind - 1)}></button>
      <button onClick={() => setind(ind + 1)}></button> */}
      {/* <p>quotes:{ind}</p> */}
      <Css />;
    </div>
  );
}
export default App;
