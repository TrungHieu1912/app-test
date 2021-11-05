import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
// import Helmet from "react-helmet";
// import ErrorBoundary from "./ErrorBoudary";

const AppRoute = function ({
    component: Component,
    layout: Layout,
    path: Path,
    // isAuthenticated,
    ...restProps
}) {
    // let isLoginPath = Path === "/auth/login";
    // if (!(isAuthenticated || isLoginPath)) {
    //     return (
    //         <Redirect
    //             to={{
    //                 pathname: "/auth/login",
    //                 state: { from: restProps.location },
    //             }}
    //         />
    //     );
    // }
    // if (isLoginPath) {
    //     return <Redirect to="/" />;
    // }
    return (
        <Route
            {...restProps}
            render={(props) => {
                return (
                    <Layout {...props}>
                        {/* <Helmet titleTemplate="" defaultTitle="">
                            <meta
                                name="description"
                                content=""
                            />
                        </Helmet> */}
                        {/* <LayoutWrapper> */}
                        <Component />
                        {/* </LayoutWrapper> */}
                    </Layout>
                );
            }}
        />
    );
};

export default AppRoute;
