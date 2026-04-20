import WebRoutes from "./routes/WebRoutes";
import PasteRoutes from "./routes/PasteRoutes";
import Executor from "./pastebin/pages/Executor";

function App() {
  const host = window.location.hostname;

  let subdomain = host.split(".")[0];

  if (host === "localhost") {
    subdomain = "web"; 
  }

  if (subdomain === "paste") {
    return <PasteRoutes />;
  } else if (subdomain === "execute") {
    return <Executor />;
  } else {
    return <WebRoutes />;
  }
}

export default App;
