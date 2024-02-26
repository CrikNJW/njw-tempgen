import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1> 
    </div>
  );
}

export default function DisplayAllForms() {
  return (
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">A second link item</a>
    <a href="#" class="list-group-item list-group-item-action">A third link item</a>
    <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
    <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
  </div>
  )
}


export default App;
