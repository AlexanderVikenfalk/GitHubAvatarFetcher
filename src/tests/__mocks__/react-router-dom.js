import React from 'react';

/**
 * Mocking the global react-router function.
 * @type {{SwitchProps: SwitchProps, StaticRouter: StaticRouter, MemoryRouterProps: MemoryRouterProps, NavLinkProps: NavLinkProps, BrowserRouterProps: BrowserRouterProps, RouteComponentProps: RouteComponentProps, useRouteMatch: {<Params={} extends {[K in keyof Params]?: string}>(): match<Params>, <Params={} extends {[K in keyof Params]?: string}>(path: (string | string[] | RouteProps)): (match<Params> | null)}, Route: Route, useLocation<S=LocationState>(): Location<S>, RouteChildrenProps: RouteChildrenProps, HashRouterProps: HashRouterProps, generatePath<S extends string>(path: S, params?: ExtractRouteParams<S>): string, Link: {<S=LocationState>(...params: Parameters<Link<S>>): ReturnType<Link<S>>}, StaticRouterProps: StaticRouterProps, Prompt: Prompt, matchPath<Params extends {[K in keyof Params]?: string}>(pathname: string, props: (string | string[] | RouteProps), parent?: (match<Params> | null)): (match<Params> | null), Switch: Switch, NavLink: {<S=LocationState>(props: (React.PropsWithoutRef<NavLinkProps<S>> & React.RefAttributes<HTMLAnchorElement>)): ReturnType<NavLink<S>>}, BrowserRouter: BrowserRouter, useHistory<HistoryLocationState=LocationState>(): History<HistoryLocationState>, match, RedirectProps: RedirectProps, useParams<Params={} extends {[K in keyof Params]?: string}>(): Params, RouteProps: RouteProps, LinkProps: LinkProps, RouterProps: RouterProps, Router: Router, HashRouter: HashRouter, MemoryRouter: MemoryRouter, withRouter<P extends RouteComponentProps<any>, C extends React.ComponentType<P>>(component: (C & React.ComponentType<P>)): (React.ComponentClass<Omit<P, keyof RouteComponentProps<any>> & WithRouterProps<C>> & WithRouterStatics<C>), RouterChildContext: RouterChildContext, Redirect: Redirect, PromptProps: PromptProps}}
 */
const reactRouterDom = require('react-router-dom');

reactRouterDom.BrowserRouter = ({children}) => <div>{children}</div>;

module.exports = reactRouterDom;
