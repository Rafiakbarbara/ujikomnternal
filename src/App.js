// import * as React from "react"
// import { BrowserRouter as Router, Route, , Link } from "react-router-dom"
// import AboutMe from "./boxmodel/componentmateri/AboutMe";
// import Contact from "./boxmodel/componentmateri/Contact";
// import Main from "./boxmodel/componentmateri/Main";
// import Footer from "./boxmodelcomponentmateri/Footer";
// import Navbar from "./boxmodel/componentmateri/Navbar";

// const App = () => {
//     return (
//         <div className="app">
//             <Router>

//                 <nav>
//                     <ul>
//                         <li>
//                             <link to="/">home</link>
//                         </li>

//                         <li>
//                             <link to="/about">About</link>
//                         </li>

//                         <li>
//                             <link to="/contact">Contact</link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Routes>
//                     <Route index element={<Main />} />
//                     <Route path="about" element={<aboutme></aboutme>}></Route>
//                 </Routes>
//             </Router>
//         </div>
//     )
// }

// export default App;

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import HeroSection from './HeroSection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './Contact';

function App() {

    return (
        <div className='App'>
            <Router>
                <Header toogleMenu={() => 'setShowMenu'(! "ShowMenu")}></Header>
                <Routes>
                    <Route path={"/home"} Component={HeroSection} />
                    <Route path={"/menu"} Component={Menu} />
                    <Route path={"/contact"} Component={Contact} />
                </Routes>
            </Router>
            <Footer></Footer>
        </div >
    );
}

export default App;                                                                                                                                     