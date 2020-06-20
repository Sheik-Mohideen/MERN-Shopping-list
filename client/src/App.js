import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'reactstrap';
import Appnavbars from './components/Appnavbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/itemModel';
import {Provider} from 'react-redux';
import store from './store'
class App extends Component
{
 render()
 {
   
  return (
    <Provider store={store}>
    <div className="App">
      <Appnavbars/>
      <Container>  
        <ItemModel/>
        <ShoppingList/> 
      </Container>
    </div>
    </Provider>
  );

 }
}

export default App;
