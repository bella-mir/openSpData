import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#585ACF",
          colorFillSecondary: "#B6C5F2",
          colorLink: "#595fd9",
          fontFamily: "Montserrat",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
