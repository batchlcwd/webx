import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import counterStore from "./redux/counter/store.js";
import authStore from "./redux/auth/store.js";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterStore}>
      <Provider store={authStore}>
        <App />
      </Provider>
    </Provider>
  </StrictMode>
);
