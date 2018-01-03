import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const renderApplication = (App, store) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

const { store } = configureStore();

renderApplication(App, store);

registerServiceWorker();
