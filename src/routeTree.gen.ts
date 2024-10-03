/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as HomeImport } from './routes/Home'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const HomeRoute = HomeImport.update({
  path: '/Home',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/Home': {
      id: '/Home'
      path: '/Home'
      fullPath: '/Home'
      preLoaderRoute: typeof HomeImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/Home': typeof HomeRoute
  '/about': typeof AboutRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/Home': typeof HomeRoute
  '/about': typeof AboutRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/Home': typeof HomeRoute
  '/about': typeof AboutRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/Home' | '/about'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/Home' | '/about'
  id: '__root__' | '/' | '/Home' | '/about'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomeRoute: typeof HomeRoute
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeRoute: HomeRoute,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/Home",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/Home": {
      "filePath": "Home.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
