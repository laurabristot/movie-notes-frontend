import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile'
import { NewMovie } from '../pages/NewMovie'
import {EditMovie} from '../pages/EditMovie'


export function AppRoutes(){
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/details/:id" element={<MoviePreview/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/newmovie" element={<NewMovie/>} />
    <Route path="/editmovie/:id" element={<EditMovie/>} />
  </Routes>
    )
}