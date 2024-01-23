import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app/app";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
