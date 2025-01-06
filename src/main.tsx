import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "@app/providers";
import App from "@app/App";
import { Provider } from "react-redux";
import { createReduxStore } from "@app/model/store";
import "@app/style/index.scss";

createRoot(document.getElementById("root")!).render(
  <Provider store={createReduxStore()}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);
