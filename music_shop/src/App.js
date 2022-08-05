import logo from './logo.svg';
import './App.css';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import MusicInstruments from './Components/Music/MusicInstruments';
import { Route, Routes } from 'react-router-dom';//need to import Routes 
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Common from './Components/Common/Common';
import MusicEnquiry from './Components/Music/MusicEnquiry';
import PageNotFound  from './Components/PageNotFound';
import LikeCounter from './Components/Counter/LikeCounter';
import Products from './Components/About/Products';
import Us from './Components/About/Us'
import  NavList from './Components/NavList';
import Technologies from './Components/Technologies';
import Counter from './Components/Counter';
import { createContext } from 'react';


export const cxt=createContext()

function App() {
  return (
    <div>
    <Header/>
    <hr/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/music" element={<MusicInstruments/>}/>
        <Route path="/about" element={<About/>}/>
         <Route path="/counter" element={<LikeCounter/>}/>
         <Route path="/common" element={<Common/>}/>
         <Route path="/enquiry/:iName" element={<MusicEnquiry/>}/>
         <Route path="/about/us" element={<Us/>}/>
         <Route path="/hooks" element={<Counter/>}/>
         <Route path="/about/products" element={ <cxt.Provider value={" abc  is here from your grandparent"}><Products/></cxt.Provider>}/>
         <Route path="/tech" element={<Technologies/>}/>
         <Route path="/*" element={<PageNotFound/>}/>
         
         <Route path="/navLink" element={<NavList/>}/>
    </Routes>
   
    <Footer/>
   
    {/* <hr/>
    <MusicInstruments/> */}
    <hr/>
    
  </div>
  );
}

export default App;
