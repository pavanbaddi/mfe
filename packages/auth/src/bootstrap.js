import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history"

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );

    return {
        onParentNavigation({ pathname: nextPathName }) {
            const { pathname } = history.location;
            if (pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    }
}

if (process.env.NODE_ENV === "development") {
    const el = document.getElementById("_auth-dev-root");
    if (el) {
        mount(el, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };