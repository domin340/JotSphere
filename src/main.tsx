import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.scss";
import { KeyListener } from "./utils/keyHandler";
import Index from "./pages/Index";
import Navigation from "./lib/@me/Navigation/component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navigation />
    <Index />
    <KeyListener />
  </StrictMode>
);
