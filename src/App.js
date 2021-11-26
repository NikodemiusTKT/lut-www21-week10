import logo from './logo.svg';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';

import MyContainer from './components/MyContainer';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={MyContainer} />
            <Route path="/about" exact component={About} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
