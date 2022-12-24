import { useRoutes } from "react-router-dom";
import { publicRoute } from "./router";

function App() {
  const elements = useRoutes(publicRoute);
  return elements;
}

export default App;
