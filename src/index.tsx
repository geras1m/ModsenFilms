import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "@components/App";
import { store } from "@store/store";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </ErrorBoundary>,
);
