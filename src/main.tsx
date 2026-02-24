import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ParentRoute from './routes/ParentRoute'
import { handleSubmit, UserNoteInput } from './routes/UserNoteInput'
import App from './routes/Pages'
import { IsDataStoreProvider } from './store/ContextStore'
import { GetData } from './components/UserNoteList'
import Note, { NoteReq } from './routes/DynamicNote'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ParentRoute/>,
    children: [
      {
        path: '/',
        element: <App />,
        loader: GetData,
        children: [{path: "/create-notes", action: handleSubmit, element: <UserNoteInput/>}]
      }
    ]
  },
  {path: "/:id", loader: NoteReq, element: <Note/>}
])

createRoot(document.getElementById('root')!).render(
  <IsDataStoreProvider>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </IsDataStoreProvider>
)
