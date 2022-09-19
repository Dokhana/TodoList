import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import TodoList from "./TodoList";

const rootElement = document.getElementById('container');
const root = createRoot(rootElement);

root.render(
    
  <StrictMode>

    <TodoList/>

  </StrictMode>,

);
