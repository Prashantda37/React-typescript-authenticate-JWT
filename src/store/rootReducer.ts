import { connectRouter } from "connected-react-router";
import { Cookies } from "react-cookie";
import { history } from "./configureStore";

const cookies = new Cookies();

function rootReducer(state: any, action: any) {
	return {
		router: connectRouter(history)(state.router, action),
	}
}

function createRootReducer() {
	return rootReducer;
}

export default createRootReducer;