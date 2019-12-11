import React from 'react';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import store from './ducks/store'
import {withRouter} from 'react-router-dom'
import routes from './routes';
import Nav from './Components/Nav/Nav';
import './App.css';

function App(props) {
  return (
    <Provider store={store}>
    <HashRouter>
    <div className="App">
      {props.location.pathname === '/' || 
      props.location.pathname === '/components/nav/nav'
      ? (<>
      {routes}
      </>)
      : (<>
      <Nav/>
      {routes}
      </>)}
    </div>
    </HashRouter>
    </Provider>
    
  );
}

export default withRouter(App);
