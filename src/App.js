import React from 'react';
import "./App.css";
import {Navbar} from './Components/Navbar';
import {Routes,Route} from "react-router-dom";
import {Products} from './Components/Products';
import {Home} from './Components/Home';
import { Users } from './Components/Users';
import { UserDetails } from './Components/UserDetails';


const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
        
        <Route path='/Home' element={< Home />}/>
        <Route path='/products'  element={<Products/>}/>
        <Route path='/users'  element={<Users/>}/>
        <Route path='/users/:id'  element={<UserDetails/>}/>

        </Routes>
    </div>
  )
}

export default App
