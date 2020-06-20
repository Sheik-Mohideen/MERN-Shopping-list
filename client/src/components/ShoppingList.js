import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import {v4 as uuidv4} from 'uuid';

class ShoppingList extends Component{
    state={
        items:[
            {id:uuidv4(),name:"Eggs"},
            {id:uuidv4(),name:"Milk"},
            {id:uuidv4(),name:"Onion"},
            {id:uuidv4(),name:"Tomatos"}            
        ]
    }
    render()
    {
        const {items}=this.state;
        return(
            <Container>
                <Button color="dark" className="mt-5" style={{marginBottom:'2 rem'}} onClick={()=>
                {
                    const name=prompt('Enter Item');
                    if(name)
                    {   //must use (bracket) after => in setState or use function key word
                        this.setState( state =>(
                            {   
                                items: [...state.items, { id:uuidv4(),name:name}]
                            }
                        ))
                    }
                }}>AddItmes
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list mt-2">
                        {items.map(({id,name})=>(
                           <CSSTransition key={id}  timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn" color="success" size="sm"
                                  onClick={ ()=>{
                                    this.setState(state=>({
                                        items:state.items.filter(item => item.id !== id)
                                    }))
                                  }}>
                                    &times;
                                 </Button>{name} </ListGroupItem>
                           </CSSTransition> 
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;