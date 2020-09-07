import React, {Component, useContext} from "react"
import {
	Button,
	Card,
	CardBody,
	Modal,
	ModalFooter,
	ModalHeader,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap"


import {StoreContext} from "../../App";
import {useObserver} from "mobx-react";


/*
	 This is the Modal that opens when the Edit or Add Task is pressed
 */
export default class TaskModal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: this.props.currentTask===''?"":this.props.currentTask.title,
			value: this.props.currentTask===''?"":this.props.currentTask.value,

		}
	}

	/*
	  Method to Close the Modal.
	 */
	close = () => {
		this.props.setModalType('');
		this.props.setCurrentTask('');
	};


	/*
	  Handles the onClick when the task is added also displays the mobx data on the functional component.
	 */
	handleTaskSubmit = () => {
		const {title, value} = this.state;
		let {modalType,currentTask} = this.props;
		const store = useContext(StoreContext);
		return useObserver(() => (
			<Form onSubmit={(e)=>{
				e.preventDefault();
				currentTask===''? store.addTask({title,value}):store.editTask(currentTask.id,{title,value});
				this.close();
			}}>
				<div className="d-flex justify-content-center mt-2">
					<Card>
						<CardBody>
							<FormGroup>
								<Label>Title</Label>
								<Input value={title} onChange={(e)=>this.setState({title:e.target.value})}/>
							</FormGroup>
							<FormGroup>
								<Label>Value</Label>
								<Input value={value} onChange={(e)=>this.setState({value:e.target.value})}/>
							</FormGroup>
						</CardBody>
					</Card>
				</div>
				<ModalFooter>
					<Button color="primary" onClick={this.close}>
						Cancel
					</Button>

					<Button color="info" type={"submit"}>{`${modalType} Task`}</Button>

				</ModalFooter>
			</Form>
		))
	}


	// Render function that will render elements the Modal with mobx stuff.
	render() {
		let {modalType} = this.props;

		return (
			<Modal
				isOpen={true}
				className="modal-dialog-centered"
				key={this.props.key}
			>
				<ModalHeader toggle={this.close}>
					{modalType}
				</ModalHeader>
				<this.handleTaskSubmit/>
			</Modal>
		);
	}
};

