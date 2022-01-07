import './App.css'
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import SearchResults from './SearchBar/SearchResults';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Home from './Screen/Home';
import ProductScreen from './Screen/ProductScreen';
import Sign from './Screen/Sign';
import Data from './Data';
import SearchBar from './SearchBar/SearchBar'
import Muscle from './Screen/Categories/Muscle';

function App() {

  


  console.log("a");
  console.log('AAAAA');


  return (
 
    <div className="App">
      <div className="Header container-fluid">
        <div>
          <div className="Logo">
          <Link to="/Home">Turbo.</Link>
          </div>
        </div>
      <div className="Search">      
      <input type="text" placeholder="Search"/>
      <a href="/" className="Search_icon">
        <FaSearch size="20px" />
        </a>
      </div>

        <div className="Icons">
        <div><FaShoppingCart color="white" size="25px" /></div>
        <Link to="/Sign"><div><FaUserCircle color="white" size="25px" /></div></Link>
        </div>

      </div>

      <div className="Categories">
      <div>Muscle</div>
      <div>Import</div>
      <div>Super</div>
      <div>Jdm</div>
      <div>Misc</div>
      </div>
      <p></p>


    
      <p></p>
      <br></br>
      <p></p>
      <main className="main">
            <div className="content">
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/ProductScreen" component={ProductScreen} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Muscle" element={<Muscle />} />
            </Routes>
            </div>
      </main>
    </div>
  );
}

export default App;
