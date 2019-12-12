import React from 'react';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import store from './ducks/store'
import {withRouter} from 'react-router-dom'
import routes from './routes';
import Nav from './Components/Nav/Nav';
import './App.css';

function App(props) {
  console.log('props', props)
  return (
      
    <div className="App">

      {props.location.pathname === '/'
      ? (<>
      {routes}
      </>)
      : (<> 
      <Nav/>
      {routes}
      </>)}
    </div>
  );
}

export default withRouter(App);
