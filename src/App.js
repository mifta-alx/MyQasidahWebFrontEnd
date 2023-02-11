import { React } from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import { ErrorPage, Home } from "./layout";

function App() {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/error" component={ErrorPage} />
      </BrowserRouter>
  );
}

export default App;
