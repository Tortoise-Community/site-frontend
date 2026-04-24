import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import LabsPage from "../web/pages/LabsPage";
import ExternalRedirect from "../web/components/ExternalRedirect";

export default function LabRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LabsPage}/>
                <Route path="/join" component={() => <ExternalRedirect url = "https://discord.com/invite/Ex8xeWD"/>}/>
                <Route path="/appeals" component={() => <ExternalRedirect url = "https://discord.com/invite/YxEzEqMNY8"/>}/>
                <Route path="/github" component={() => <ExternalRedirect url = "https://github.com/Tortoise-Community/"/>}/>
                <Route path="/runtime" component={() => <ExternalRedirect url="https://discord.com/oauth2/authorize?client_id=780132667265122315"/>}/>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}