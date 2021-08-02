import './App.css';
import SpoonacularSearch from '../API Search/SpoonacularSearch';
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router>
      <p>Spoonacular Recipe API</p>
      <Route exact path="/">
      <SpoonacularSearch />
      </Route>
      <Switch>
        <Route path="/recipe_details/:id" exact children={<RecipeDetails />} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
