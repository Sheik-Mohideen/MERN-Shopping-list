import React,{Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../action/itemAction';
import {v4 as uuidv4} from 'uuid';
class ItemModel extends Component{
    state={
        model:false,
        name:''
    }
    toggle = () =>
    {
        this.setState(state=>(
            {
                model:!state.model
            }
        ))
    }
    onChange=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>
    {
        e.preventDefault();
        const newItem={
            id:uuidv4(),
            name:this.state.name
        }

        this.props.addItem(newItem);
        this.toggle();
    }
    render()
    {
        return(
            <div color="dark" style={{marginBottom:'2rem'}} onClick={this.toggle}>
                <Button className="mt-5">
                    AddItem
                </Button>
                <Modal isOpen={this.state.model} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add Shopping Item"
                                    onChange={this.onChange}
                                />
                                <Button color="danger"className="mt-4" style={{marginBottom:"2rem"}} block>
                                    AddItem
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) =>
({
    item:state.item
})
export default connect(mapStateToProps,{addItem})(ItemModel);