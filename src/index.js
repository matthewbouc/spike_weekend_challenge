import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';






// ********** REDUCERS **********
const recipeSearchList = (state = [], action) => {
  if(action.type === 'SET_QUERY_RECIPES'){
    return action.payload;
  }
  return state
}

const recipeIdDetails = (state = [], action) => {
  if (action.type === 'SET_RECIPE_DETAILS'){
    return action.payload;
  }
  return state
}



const storeInstance = createStore(
  combineReducers({
      recipeSearchList,
      recipeIdDetails,
  }),
  applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
  document.getElementById('root'));