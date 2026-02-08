import WebRoutes from "./routes/WebRoutes";
import PasteRoutes from "./routes/PasteRoutes";
import Executor from "./pastebin/pages/Executor";

function App() {
  if (window.location.host.split(".")[0] === "paste") {
    return <PasteRoutes />;
  } else if (window.location.host.split(".")[0] === "execute") {
    return <Executor />;
  } else {
    return <WebRoutes />;
  }
}

export default App;
