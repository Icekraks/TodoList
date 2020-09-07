import React, {Component} from 'react';
import "./Navigation.scss"
import * as Icon from "react-feather"
import logo from "../../Assets/Logos/Logo_black.png";
import history from "../../history"
import {Button} from "reactstrap"
import storeInstance from "../../Store";

class Navigation extends Component {


	navigateMemes = ()=>{
		history.push("/Memes")
	};

	navigateHome = () =>{
		history.push("/Dashboard");
	};

	signOut = ()=>{
		storeInstance.setLoggedIn(false);
		history.push("/")
	};


	render() {
		return (
			<div className={"parentNav"}>
				<div className={"col-9 Navigation"}>
					<Button className="col-2 navButton" onClick={this.navigateMemes}><span className={"text col-12"}>Memes</span></Button>
				</div>

				<div className={"col-3 logo"}>
					<Button className={"logoButton"} onClick={this.navigateHome}><img className={"logoAsset"} src={logo} alt={"logo"}/></Button>
					<a href={"https://www.facebook.com/OfficialIcekraks"}><Icon.Facebook className={"socialMedia"}/></a>
					<a href={"https://www.instagram.com/icekraks/"}><Icon.Instagram className={"socialMedia"}/></a>
					<a href={"https://twitter.com/OfficialIcekrak"}><Icon.Twitter className={"socialMedia"}/></a>
				</div>
				<div>
					<Button className="col-2 navButton" onClick={this.signOut}>Sign Out</Button>
				</div>
			</div>
		)
	}
}

export default Navigation
