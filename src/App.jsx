
import './App.css'
import Layout  from '../src/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CreateTrip from './pages/CreateTrip'
import TripDetails from './pages/TripDetails'


function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='create_trip' element={<CreateTrip/>}/>
      <Route path='trip_details' element={<TripDetails/>}/>
    </Route>
  )
)
  return (

      <RouterProvider router={router}/>

  )
}

export default App
