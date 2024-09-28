import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.scss";
import { KeyListener } from "./utils/keyHandler";
import Index from "./pages/Index";
import Navigation from "./lib/@me/Navigation/component";
import { Init } from "./api/devs/_db/index";

// Initializes whole developers database, It has to run ONLY once
Init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KeyListener />
    <Navigation />
    <div id="scene">
      <Index />
    </div>
  </StrictMode>
);
