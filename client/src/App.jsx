import "./App.css";
import { Provider } from "react-redux";
import { PageRoutes } from "./routes/Routes";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  );
}

export default App;
