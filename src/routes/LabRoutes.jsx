import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LabsPage from "../web/pages/LabsPage";
import ExternalRedirectSilent from "../web/components/ExternalRedirectSilent";
import ExternalRedirect from "../web/components/ExternalRedirect";

export default function LabRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/landing" component={LabsPage} />
        <Route exact path="/labs" component={LabsPage} />
        <Route
          path="/"
          component={() => <ExternalRedirectSilent url="https://tyxc.org" />}
        />
        <Route
          path="/events"
          component={() => (
            <ExternalRedirectSilent url="https://tyxc.org/events" />
          )}
        />
        <Route
          path="/rules"
          component={() => (
            <ExternalRedirectSilent url="https://tyxc.org/rules" />
          )}
        />
        <Route
          path="/privacy"
          component={() => (
            <ExternalRedirectSilent url="https://tyxc.org/privacy" />
          )}
        />
        <Route
          path="/appeals"
          component={() => (
            <ExternalRedirect url="https://discord.com/invite/YxEzEqMNY8" />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
