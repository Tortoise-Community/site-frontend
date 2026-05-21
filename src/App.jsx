import WebRoutes from "./routes/WebRoutes";
import PasteRoutes from "./routes/PasteRoutes";
import Executor from "./pastebin/pages/Executor";
import LabRoutes from "./routes/LabRoutes";
import RuntimeRoutes from "./routes/RuntimeRoutes";
import FileViewerRoutes from "./routes/FileViewerRoutes";

function App() {
  const host = window.location.hostname;
  let subdomain = host.split(".")[0];

  if (host === "localhost") {
    subdomain = "web";
  }

  switch (subdomain) {
    case "web":
      return <WebRoutes />;
    case "paste":
      return <PasteRoutes />;
    case "labs":
      return <LabRoutes />;
    case "execute":
      return <Executor />;
    case "viewer":
      return <FileViewerRoutes />;
    case "runtime-bot":
      return <RuntimeRoutes />;
    default:
      return <WebRoutes />;
  }
}

export default App;
