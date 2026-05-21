import { BrowserRouter, Route, Switch } from "react-router-dom";
import FileViewer from "../pastebin/components/FileViewer";

export default function FileViewerRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:fileUrl*" component={FileViewer} />
      </Switch>
    </BrowserRouter>
  );
}
