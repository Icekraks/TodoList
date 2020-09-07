import React, {Component} from 'react';
import {observer} from "mobx-react";
import tpose from "../Assets/Backgrounds/tpose.PNG";
import chat from "../Assets/Backgrounds/chat.png";
import Navigation from "./Navigation/Navigation";
import storeInstance from "../Store";
import history from "../history";

class Memes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		}
	}
	componentDidMount() {
		if (storeInstance.getLoggedIn() === false) {
			history.push("/")
		}
		this.setState({visible: true});
	}

	render() {
		const {visible} = this.state;
		if (visible === false) {
			return null
		}
		return (
			<div>
				<Navigation/>
				<div className={"BodyElement"}>
					<h1>MEMES</h1>
					<img src={tpose} alt={"tpose"}/>
					<br/>
					<img src={chat} alt={"chat"} style={{width:"50%"}}/>
				</div>
			</div>


		)
	}
}

export default observer(Memes)
