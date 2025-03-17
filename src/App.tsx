import "./App.css";
import "./assets/css/bootstrap.css";
import "./assets/css/color.css";
import "./assets/css/fontawesome.css";
import "./assets/css/plugins.css";
import "./assets/css/style.css";
import "jquery";
// import "./assets/js/jqueryCustome";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
