import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile'
import { NewMovie } from '../pages/NewMovie'


export function AppRoutes(){
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/details" element={<MoviePreview/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/newmovie" element={<NewMovie/>} />
  </Routes>
    )
}