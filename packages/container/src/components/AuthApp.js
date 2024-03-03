import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigation } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: (location) => {
                const { pathname: nextPathName } = location;
                const { pathname } = history.location
                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            },
            onSignIn
        });

        history.listen(onParentNavigation)
    }, []);

    return <div ref={ref} />
}   