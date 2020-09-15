import React,{Component} from "react";
import Navigation from "../Navigation/Navigation";

export default class HomePage extends Component {
	componentDidMount() {

	}

	render(){

		return(
			<div>
				<Navigation/>
				<div className={"BodyElement"}>
					hi
				</div>
			</div>
		)
	}

}
