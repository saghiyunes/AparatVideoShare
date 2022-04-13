
import './App.css'
import Home from "./Pages/Home";
import SingleVideo from "./Pages/SingleVideos";
import { Routes, Route } from "react-router-dom";
import Register from './Components/Home/Register';
import Test from './Components/Home/Test';
import Login from './Components/Home/Login';
import Movies from './Pages/CategoriesVideoes/Movies';
import Game from './Pages/CategoriesVideoes/Game';
import Sport from './Pages/CategoriesVideoes/Sport';
import Cartoon from './Pages/CategoriesVideoes/Cartoon';
import AparatApp from './Pages/App/AparatApp';
import Ad from './Pages/Ad/Ad';
import Logo from './Pages/Logo/Logo';
import Income from './Pages/Income/Income';
import Contactus from './Pages/Contactus/Contactus';
import Policy from './Pages/Policy/Policy';
import PlayList from './Pages/PlayList/PlayList'



















function App() {


  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="videos " exact element={<Home />} />
      <Route path="register "  element={<Register />} />
      <Route path="videos/:videoid" exact element={<SingleVideo />} />
      <Route path="test" element={<Test />}/>
      <Route path="login" element={<Login />}/>
      <Route path="movies" element={<Movies />}/>
      <Route path="game" element={<Game />}/>
      <Route path="sport" element={<Sport />}/>
      <Route path="cartoon" element={<Cartoon />}/>
      <Route path="app" element={<AparatApp />}/>
      <Route path="ad" element={<Ad />}/>
      <Route path="logo" element={<Logo />}/>
      <Route path="income" element={<Income />}/>
      <Route path="contactus" element={<Contactus />}/>
      <Route path="policy" element={<Policy />}/>
      <Route path="playlist" element={<PlayList />}/>





  






  

     
     



  </Routes>
  )
}

export default App
