import React from 'react';
import { Navbar } from './components';
import { Footer, Header, Menu, AboutUs, Chef, Findus, Gallery, Intro, Laurels } from './container'
import './App.css';
import './index.css';


function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Menu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <Findus />
            <Footer />
        </div>
    )
}

export default App