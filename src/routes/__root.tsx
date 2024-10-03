import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "../App.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <a href="/home">home</a>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
