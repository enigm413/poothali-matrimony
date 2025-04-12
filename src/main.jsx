import { createRoot } from "react-dom/client";
import App from "./App";

const rootEl = createRoot(document.querySelector("#root"));
rootEl.render(<App />);
