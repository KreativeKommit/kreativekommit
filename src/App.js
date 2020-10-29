import React from 'react';
import InfoBar from './components/shared/infobar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'

const App = props => {
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