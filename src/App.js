import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from './pages/todo';
import Note from './pages/note';
import InputSearch from './pages/Input';
import Login from './pages/login';

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={InputSearch} />
            <Route exact path="/note" component={Note} />
            <Route exact path="/todo" component={Todo} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
