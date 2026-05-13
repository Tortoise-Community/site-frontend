import WebRoutes from "./routes/WebRoutes";
import PasteRoutes from "./routes/PasteRoutes";
import Executor from "./pastebin/pages/Executor";
import LabRoutes from "./routes/LabRoutes";
import RuntimeRoutes from "./routes/RuntimeRoutes";

function App() {
  const host = window.location.hostname;

  let subdomain = host.split(".")[0];

  if (host === "localhost") {
    subdomain = "web";
  }
  if (subdomain === "web") {
    return <WebRoutes />;
  }
  if (subdomain === "paste") {
    return <PasteRoutes />;
  } else if (subdomain === "labs") {
    return <LabRoutes />;
  } else if (subdomain === "execute") {
    return <Executor />;
  } else if (subdomain === "runtime-bot") {
    return <RuntimeRoutes />;
  } else {
    return <WebRoutes />;
  }
}

export default App;
