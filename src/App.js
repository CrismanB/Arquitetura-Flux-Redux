import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import history from "./services/history";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
