import { BrowserRouter, Route, Switch } from "react-router-dom";
import Executor from "../pastebin/pages/Executor";

export default function PasteRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Executor} />
      </Switch>
    </BrowserRouter>
  );
}
