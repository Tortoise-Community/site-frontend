import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LabsPage from "../web/pages/LabsPage";
import ExternalRedirect from "../web/components/ExternalRedirect";

export default function LabRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/landing" component={LabsPage} />
        <Route
          path="/"
          component={() => (
            <ExternalRedirectSilent url="https://tortoisecommunity.org" />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
