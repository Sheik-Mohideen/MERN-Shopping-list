import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Appnavbars from './components/Appnavbar';
import ShoppingList from './components/ShoppingList';

class App extends Component
{
 render()
 {
   
  return (
    <div className="App">
      <Appnavbars/>
      <ShoppingList/>
    </div>
  );

 }
}

export default App;
