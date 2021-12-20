import React from 'react';
import {Index} from './shared/Index';
import {Login} from './shared/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="container pt-4 h-75">
                <Routes>
                    <Route path="/" element={<Index/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
