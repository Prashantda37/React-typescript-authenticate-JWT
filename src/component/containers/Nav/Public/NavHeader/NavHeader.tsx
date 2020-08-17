import React from "react";
import { Link } from "react-router-dom";
import "./NavHeader.scss"
import { ROUTE_SIGN_IN } from "../../../../../constant/router";

export default ({ }:any) => {
	return (<nav className="row navbar navbar-expand-sm border-bottom" >
		<div>
			<Link to="/">Logo</Link>
		</div>
		<div className="ml-auto">
			<HeaderLink />
		</div>
	</nav>)
}

const HeaderLink = () => {
	return <ul className="navbar-nav">
		<li className="nav-item p-1"><Link to="/sign-up">Sign up now</Link></li>
		<li className="nav-item p-1">|</li>
		<li className="nav-item p-1"><Link to={ ROUTE_SIGN_IN }>Sign in</Link></li>
	</ul>
}