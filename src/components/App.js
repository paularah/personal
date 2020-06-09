import React from 'react';
import HomepageLayout from './HomePageLayout';
import Home from './blog/home'
import {Route, BrowserRouter} from 'react-router-dom';
class App extends React.Component{

    render(){
        return (
            <BrowserRouter>
            <Route path='/' exact component={HomepageLayout}/>
            <Route path='/blog' exact component={Home}/>
            </BrowserRouter>
        )
    }
}

export default App