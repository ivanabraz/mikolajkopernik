import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// PAGES
import Home from './pages/Home';
import HomeTest from './pages/HomeTest';


// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Spin from './pages/Spin';

const App = () => {

    return (
        <NavBarProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={ <Home /> }/>
                    <Route path='hometest' element={ <HomeTest /> }/>
                    <Route path='spin' element={ <Spin /> }/>
                </Routes>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
