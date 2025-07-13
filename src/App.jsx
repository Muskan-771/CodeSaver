import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import TestPaste from './TestPaste'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:
        <div>
          <Navbar/>
          <Home/>
           {/* <TestPaste /> */}
        </div>
      },
      {
        path:"/pastes",
        element:
        <div>
          <Navbar/>
          <Paste/>
        </div>
      },
      {
        path:"/pastes/:id",
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
      }
    ]
  )

  return (
   <div>
    
    <RouterProvider router={router} />
          
     
   
   </div>
  )
}

export default App
