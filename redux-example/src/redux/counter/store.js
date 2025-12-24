import { createStore } from "redux";
import counterReducer from "./reducer";

const counterStore = createStore(counterReducer);

export default counterStore;
