import "./styles.css";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Home, FirstInstructions,
   ExampleAudio,SecondInstructions,
    ExampleWord, FirstResearch, SecondResearch, FormPage} from '../src/page'



export default function App() {
  return (
    <div> 
      <Router>
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/instruction" component={FirstInstructions}/>
        <Route path="/example-word" component={ExampleWord}/>
        <Route path="/first-research" component={FirstResearch}/>
        
        <Route path="/second-instruction" component={SecondInstructions}/>
        <Route path="/example-audio" component={ExampleAudio}/>
        <Route path="/second-research" component={SecondResearch}/>

        <Route path="/form" component={FormPage}/>
      </Switch>
      </Router>
    </div>


/*
  Home,
  FirstInstructions,
  ExampleWord,
  FirstResearch,

  
  SecondInstructions,
  ExampleAudio,
  SecondResearch,

  FormPage*/ 
  );
}
