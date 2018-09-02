import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

//Semantic UI CSS
import "semantic-ui-css/semantic.min.css";

//redux
import { store } from "./redux/MeinStore";
import { Provider } from "react-redux";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
