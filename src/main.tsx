import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ParentRoute from './routes/ParentRoute'
import { UserNoteInput } from './routes/UserNoteInput'
import App from './routes/Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ParentRoute/>,
    children: [
      {
        path: '/',
        element: <App />,
        children: [{path: "/create-notes", element: <UserNoteInput/>}]
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
