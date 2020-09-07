import React, {Component} from 'react';
import {Card,CardHeader,CardTitle,CardBody,Form,FormGroup,Label,Input} from 'reactstrap'
import history from '../history'
import storeInstance from "../Store";


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state={
			username:"",
			password:"",
		}
	}

	//Handles Login validation, uses mobx to store a validation check for if your signed in or not.
	handleLogin=(e)=>{
		e.preventDefault();
		const {username,password} = this.state;
		if(username==="Icekraks" && password==="123"){

			storeInstance.setLoggedIn(true);
			history.push("/Dashboard");
		}
	}


	//yes the form is required so no signing in without a password *duhhh dummy maybe you should have done that previously fw*
	render() {
		console.log(storeInstance);
		return (

			<div className={"BodyElement"}>
				<Card className="d-flex flex-column justify-content-center align-items-center">
					<CardHeader >
						<CardTitle>
							Login Page
						</CardTitle>
					</CardHeader>
					<CardBody>
						<Form onSubmit={(e)=>this.handleLogin(e)}>
							<FormGroup>
								<Label for={"etext"}>
									Username
								</Label>
								<Input onChange={(e)=>this.setState({username:e.target.value})} name="text" id="etext" type={"text"} required/>
							</FormGroup>
							<FormGroup>
								<Label for="ePassword">Password</Label>
								<Input onChange={(e)=>this.setState({password:e.target.value})} type="password" name="password" id="ePassword" required/>
							</FormGroup>
							<Input type="submit" className={"submit"} id={"submit"} value={"Submit"}/>
						</Form>
					</CardBody>
				</Card>
			</div>


		)
	}
}
