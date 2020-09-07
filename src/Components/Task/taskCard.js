import React, {Component, useContext} from 'react';
import {Card, Button, CardHeader, CardTitle, CardBody} from 'reactstrap'
import {StoreContext} from "../../App";
import {useObserver} from "mobx-react";

export default class TaskCard extends Component {

	taskNavigation = () => {
		const store = useContext(StoreContext);
		const {task,setCurrentTask,setModalType} = this.props;
		return useObserver(() => (
			<div>
				<Button onClick={()=>{
					setCurrentTask(task);
					setModalType("Edit");
				}}>Edit Task</Button>
				<Button color="danger" onClick={() => store.removeTask(task.id)}>Remove Task</Button>
			</div>

		))
	}

	render() {
		const {task} = this.props;
		return (

			<React.Fragment>
				<Card>
					<CardHeader>
						<CardTitle>
							{`${task.title} #${task.id}`}
						</CardTitle>
					</CardHeader>
					<CardBody>
						<span>{task.value}</span>
						<this.taskNavigation/>
					</CardBody>
				</Card>
			</React.Fragment>


		)
	}
}
