import { BrowserRouter, Route, Switch } from "react-router-dom";
import Runtime from "../bot-pages/Runtime";

export default function RuntimeRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Runtime} />
      </Switch>
    </BrowserRouter>
  );
}
