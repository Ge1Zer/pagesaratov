import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import AboutCase from './components/page/About';
import HomeCase from './components/page/Home';
import InteresingCase from './components/page/Interest';

const App : React.FC = () => {
  return (
  <BrowserRouter>
  <Switch>
    <Route path={'/'} exact component={HomeCase}/>
    <Route path={'/interesing'} component={InteresingCase}/>
    <Route path={'/about'} component={AboutCase}/>
  </Switch>
  </BrowserRouter>)
}

export default App;
