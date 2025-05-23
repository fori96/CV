import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { AppController } from "./AppController";
import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App viewModel={new AppController().viewModel} />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
