import React from "react";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import SignInForm from "./component/SignInForm";
import Modal from "../../../component/Modal";

class SignIn extends React.Component<any, any> {

	constructor (props: any) {
		super(props);

	}

	handleSubmit = (value:any) => {
		console.log(value)
	}

	render() {
		return (
			<Modal header="Sign in Form">
				<SignInForm onSubmit={this.handleSubmit} />
			</Modal>
		)
	}
}

export default withCookies(connect(null, null)(SignIn))