import { useState } from "react";
import "./index.css";
import Grid from "./components/Grid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid columns={10} rows={10}/>
  );
}

export default App;
