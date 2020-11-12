import React,{useEffect} from 'react';
import InfoBar from './components/shared/infobar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import { loadReCaptcha } from 'react-recaptcha-google';

const App = props => {

    useEffect(()=>{
        loadReCaptcha();
    },[])
    return (
        <div>
            <Router>
                <InfoBar/>
                <Route path = '/' component = {Home} />
            </Router>
        </div>
    )
}
export default App