import React, {Component, useContext} from 'react';
import {StoreContext} from '../../App';
import {Button} from 'reactstrap';
import {observer, useObserver} from "mobx-react";
import TaskCard from "../../Components/Task/taskCard"
import history from "../../history"
import "../../Assets/SCSS/bootstrap-extended/_card.scss"
import "./Dashboard.scss"
import storeInstance from "../../Store";
import Navigation from "../Navigation/Navigation"
import TaskModal from "../../Components/Modals/TaskModal"

class Dashboard extends Component {


	constructor(props) {
		super(props);
		console.log("lol dashboard");
		this.state = {
			visible: false,
			modalType: '',
			currentTask: ''
		}
	}

	componentDidMount() {
		if (storeInstance.getLoggedIn() === false) {
			history.push("/")
		}
		this.setState({visible: true});
	}


	//Both Methods use to handle Adding and Editing Tasks
	setModalType = (modalType) => {
		this.setState({
			modalType: modalType,
		})
	}

	setCurrentTask = (currentTask) => {
		this.setState({
			currentTask: currentTask,
		})
	}


	//Displays the tasks via a map pulling data from MobX store as it goes.
	displayTasks = () => {
		const store = useContext(StoreContext);
		return useObserver(() => (
			<div>
				<h1>Task Count is at {store.tasks.length}</h1>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<Button onClick={() => this.setModalType("Add")}>Add new Task</Button>
					<br/>
					{store.tasks.map((e) => (
						<TaskCard setModalType={this.setModalType} setCurrentTask={this.setCurrentTask} task={e}/>))}

				</div>


			</div>
		))
	};


	render() {
		const {visible, modalType, currentTask} = this.state;
		console.log(storeInstance);
		if (visible === false) {
			return null
		}
		return (

			<div>
				<Navigation/>
				<div className={"BodyElement"}>
					<this.displayTasks/>
				</div>
				{modalType !== '' &&
				<TaskModal currentTask={currentTask} setCurrentTask={this.setCurrentTask} modalType={modalType}
				           setModalType={this.setModalType}/>}
			</div>


		)
	}
}

export default observer(Dashboard)
