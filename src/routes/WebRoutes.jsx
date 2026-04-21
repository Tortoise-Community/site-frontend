import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Index from "../web/pages/Index";
import About from "../web/pages/About";
import Events from "../web/pages/Events";
import EventPage from "../web/pages/EventPage";
import Contact from "../web/pages/Contact";
import Privacy from "../web/pages/Privacy";
import Rules from "../web/pages/Rules";
import ExternalRedirect from "../web/components/ExternalRedirect";

export default function WebRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/events" component={Events}/>
                <Route path="/events/:slug" component={EventPage}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/privacy-policy" component={Privacy}/>
                <Route path="/rules" component={Rules}/>
                <Route path="/join" component={() => <ExternalRedirect url = "https://discord.com/invite/Ex8xeWD"/>}/>
                <Route path="/appeals" component={() => <ExternalRedirect url = "https://discord.com/invite/YxEzEqMNY8"/>}/>
                <Route path="/github" component={() => <ExternalRedirect url = "https://github.com/Tortoise-Community/"/>}/>
                <Route path="/runtime" component={() => <ExternalRedirect url="https://discord.com/oauth2/authorize?client_id=780132667265122315"/>}/>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}