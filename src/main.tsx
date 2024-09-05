import "./globals.css";
import "./i18n.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App.tsx";
import { ThemeProvider } from "@/providers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <App />
    </ThemeProvider>
  </StrictMode>,
);
