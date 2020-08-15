import React from "react";
import Button from "react-bootstrap/Button";
//import Modal from "../../../../../component/Modal"
import { Form, Formik, Field } from 'formik';

const SignInForm = ({ onSubmit }: any)=>{
	return <Formik
		initialValues={{email:"", password:""}}
		onSubmit={(value) => {
			onSubmit(value)
		}}
	>
		{(_: any) => (<Form>
			<div className="form-group">
					<div className="">
						Email Address
					</div>
					<div>
						<Field type="email" className="form-control" name="email" />
					</div>
				</div>
				<div className="form-group">
					<div className="">
						Password
					</div>
					<div>
						<Field type="password" className="form-control" name="password" />
					</div>
				</div>
				<div className="form-group">
					<Button type="submit" className="text-upper">Sign In</Button>
				</div>
			</Form>)
			}
	</Formik>
}



export default SignInForm;