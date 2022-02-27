import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'

import Home from './compoents/Pages/Home';

import About from './compoents/Pages/About';

import Contact from './compoents/Pages/Contact';

import Navbar from './compoents/Navbar';
import Post from './compoents/Pages/Post';
import Dashboard from './compoents/Pages/Dashboard';
import Login from './compoents/Pages/Login';
import Logout from './compoents/Pages/Logout';

function App() {
  let isLogged = false
  let data ={
    "st":"user not logged in"
  }
  return (
    < >
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/* <Route path='/' element={<h1>hello dk</h1>} /> */}

          <Route path='/home' element={<Home/>}/>

          <Route path='/about' element={<About/>}/>

          <Route path='/contact' element={<Contact/>}/>
          <Route path='/post/:category' element={<Post/>}/>
          <Route path='/post/:category/:id' element={<Post/>}/>
          <Route path='/post' element={<Post/>}/>

          <Route path='/' element={isLogged ? <Dashboard/> : <Navigate to={"/login"} replace state={data}/>}/>

          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
        
        <Route path="*" element={<h1>Error 404 page not found !!</h1>}/>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
