import "./styles.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Home, FirstInstructions, ExampleAudio,SecondInstructions, ExampleWord, FirstResearch} from '../src/page'



export default function App() {
  return (
    <div> 
      <Router>
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/instruction" component={FirstInstructions}/>
        <Route path="/example-word" component={ExampleWord}/>
        <Route path="/second-instruction" component={SecondInstructions}/>
        <Route path="/example-audio" component={ExampleAudio}/>
        <Route path="/first-research" component={FirstResearch}/>
      </Switch>
      </Router>
    </div>



  );
}
