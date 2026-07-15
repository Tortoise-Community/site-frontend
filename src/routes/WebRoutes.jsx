import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Index from "../web/pages/Index";
import About from "../web/pages/About";
import Events from "../web/pages/Events";
import EventPage from "../web/pages/EventPage";
import Contact from "../web/pages/Contact";
import Privacy from "../web/pages/Privacy";
import Rules from "../web/pages/Rules";
import LabsPage from "../web/pages/LabsPage";
import ExternalRedirect from "../web/components/ExternalRedirect";
import ApiPage from "../web/pages/ApiPage";
import ExternalRedirectSilent from "../web/components/ExternalRedirectSilent";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/api" component={ApiPage} />
        <Route exact path="/events" component={Events} />
        <Route path="/events/:slug" component={EventPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/rules" component={Rules} />
        <Route
          path="/labs"
          component={() => (
            <ExternalRedirectSilent url="https://labs.tyxc.org/landing" />
          )}
        />
        <Route
          path="/join"
          component={() => (
            <ExternalRedirect url="https://discord.com/invite/Ex8xeWD" />
          )}
        />
        <Route
          path="/appeals"
          component={() => (
            <ExternalRedirect url="https://discord.com/invite/YxEzEqMNY8" />
          )}
        />
        <Route
          path="/github"
          component={() => (
            <ExternalRedirect url="https://github.com/Tortoise-Community/" />
          )}
        />
        <Route
          path="/add_bot"
          component={() => (
            <ExternalRedirect url="https://discord.com/oauth2/authorize?client_id=780132667265122315" />
          )}
        />
        <Route
          path="/runtime"
          component={() => (
            <ExternalRedirect url="https://runtime-bot.tyxc.org/" />
          )}
        />
        <Route
          path="/oauth"
          component={() => (
            <ExternalRedirectSilent url="https://discord.com/oauth2/authorize?client_id=1504145851927236760&response_type=code&redirect_uri=https%3A%2F%2Fstudio.tyxc.org%2Flogin%2F&scope=identify+email" />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
