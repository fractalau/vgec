import App from './App'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]