import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/page.tsx";

import "@/common/sass/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
