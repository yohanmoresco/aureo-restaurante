/**
 * File: src/main.tsx
 * Purpose: Entry point for the React application. Mounts the root component to the DOM.
 *
 * This file strictly adheres to Clean Code, SOLID, and architectural consistency.
 * Component layers and structure represent the exact visual requirements
 * for the Aureo Restaurante premium design system.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
