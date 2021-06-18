import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    Intro,
    PersonalData,
    EmailAndConsent,
    GitHubProfile,
    NotFound
} from '../pages';

/**
 * Keeps track of all possible routes in the application and their corresponding
 * paths. When no existing routes matches the route the user is trying to access
 * "Page not found" component will be shown.
 * @returns {JSX.Element}
 */
const routes = () => (
    <Router data-testid="routes">
        <section className="transition-container">
            <Switch>
                <Route exact path="/" component={Intro} />
                <Route path="/personaldata" component={PersonalData} />
                <Route path="/emailandconsent" component={EmailAndConsent} />
                <Route path="/githubprofile" component={GitHubProfile} />
                <Route path="*" component={NotFound} />
            </Switch>
        </section>
    </Router>
);

export default routes;
