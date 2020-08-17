import React from "react";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import SignInForm from "./component/SignInForm";
import Modal from "../../../component/Modal";
import { auth } from "../../../store/Modules/authenticate/actions";

class SignIn extends React.Component<any, any> {

	constructor (props: any) {
		super(props);

	}

	handleSubmit = (value:any) => {
		console.log(value)
		const { authenticate } = this.props;
		authenticate(value);
	}

	render() {
		return (
			<Modal header="Sign in Form">
				<SignInForm onSubmit={this.handleSubmit} />
			</Modal>
		)
	}
}

const mapStateToProps = (state:any) => {
	return {

	}
}

const mapDispatchToProps = (dispatch:any) => {
	return {
		authenticate: (user:any) => dispatch(auth(user))
	}
}

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(SignIn))