import "./styles.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Home, Instructions, ExampleAudio, ExampleWord, FirstResearch} from '../src/page'



export default function App() {
  return (
    <div> 
      <Router>
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/instruction" component={Instructions}/>
        <Route path="/example-word" component={ExampleWord}/>
        <Route path="/example-audio" component={ExampleAudio}/>
        <Route path="/first-research" component={FirstResearch}/>
      </Switch>
      </Router>
    </div>



  );
}
