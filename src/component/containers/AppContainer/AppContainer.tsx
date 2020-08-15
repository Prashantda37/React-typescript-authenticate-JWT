import React from "react";
import { withCookies } from "react-cookie";
import { connect, Provider } from "react-redux";
import  "./AppContainer.scss"
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PublicContainer from "../PublicContainer";
import { ROUTE_SIGN_IN, ROUTE_SIGN_UP } from "../../../constant/router";
import Home from "../../../pages/public/Home";
import SignIn from "../../../pages/public/SignIn";
import RouteModal from "../../RouteModal";

interface AppContainerState { }

//TODO define route here, with all private and public
class AppContainer extends React.Component<any, AppContainerState> {
	constructor (props: any) {
		super(props);
	}

	render() {
		const { store, history } = this.props;
		return <div className="container-fluid">
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<BrowserRouter>
						<Switch>
							<Route exact path={"/"}>
								<PublicContainer children={<Home/>} />
							</Route>
							<Route exact path={ROUTE_SIGN_IN}>
								<RouteModal children={<SignIn />} />
							</Route>
							{/*<Route exact path={ROUTE_SIGN_IN}>
								<PublicContainer children={<SignIn />} />
							</Route>*/}
							{/*<Route exact path={ROUTE_SIGN_UP}>
								<PublicContainer children={<div>Sign UP</div>} />
							</Route>*/}
						</Switch>
					</BrowserRouter>
				</ConnectedRouter>
			</Provider>
		</div>
	}
}

const mapStateToProps = ({ }:any) => {
	return {
	}
};
const mapDispatchToProps = (dispatch:any) => {
	return {
	}
}

export default withCookies(
	connect(mapStateToProps, mapDispatchToProps)(AppContainer)
)

