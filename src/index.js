import React from "react";
window.React = React;
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);
