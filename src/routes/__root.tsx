import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "../App.css";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      {/* {useLocation().pathname != "/" && <div>Hello</div>} */}
      {/* <h1>sdsdsd</h1> */}
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
