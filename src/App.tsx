import { useRoutes } from "react-router-dom";
import { publicRoute } from "./router";
import "./assets/css/base.css";
import { observer } from "mobx-react";

function App() {
  const elements = useRoutes(publicRoute);
  return elements;
}

export default observer(App);
