import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import "./styles/index.scss"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component ={Home} />
          <Route path = "/a-propos"   component ={About} />
          <Route component = {NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
