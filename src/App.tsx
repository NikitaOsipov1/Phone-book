import React from 'react';
import {Index} from './shared/Index';
import {Login} from './shared/Login';
import {Phones} from './shared/Phones';
import store from './store'
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import {PrivateRoute} from './routes/PrivateRoute'
import {PublicRoute} from './routes/PublicRoute'

function App() {
    return (
        <Router>
            <div className="container pt-4 h-75">
                <Routes>

                    <Route path='/' element={<Index/>}/>

                    <Route path='/phones' element={<PrivateRoute/>}>
                        <Route path='/phones' element={<Phones/>}/>
                    </Route>

                    <Route path="/login" element={<PublicRoute/>}>
                        <Route path='/login' element={<Login/>}/>
                    </Route>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
