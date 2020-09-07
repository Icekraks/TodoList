import {observable,action,decorate} from "mobx";

class Store {
	idCount=0;
	loggedIn=false;
	tasks = [];

	addTask(task){
		task["id"] = this.idCount;
		this.idCount++;
		this.tasks.push(task)
	}

	editTask(id,task){
		task["id"] = id;
		this.tasks[this.tasks.findIndex((e)=>e.id===id)] = task;
	}

	removeTask(id){
		this.tasks.splice(this.tasks.findIndex((e)=>e.id===id),1);
	}


	getLoggedIn(){
		return this.loggedIn;
	}

	setLoggedIn(boolean){
		this.loggedIn = boolean;
	}


}
decorate(Store, {
	tasks: observable,
	loggedIn:observable,
	addTask: action,
	removeTask: action,
});

const storeInstance = new Store();
export default storeInstance;
