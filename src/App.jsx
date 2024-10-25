import { ConfigProvider } from "antd";
import HomePage from "./pages/HomePage";
import theme from "./theme";
import "./App.css";

function App() {
   return (
      <ConfigProvider theme={theme}>
         <div className="app">
            <HomePage />
         </div>
      </ConfigProvider>
   );
}

export default App;
