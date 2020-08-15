import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, Middleware } from "redux";
import { createLogger } from "redux-logger";
import createRootReducer from "./rootReducer";

export const history = createBrowserHistory();

const rootReducer = createRootReducer() as any;

export default function configureStore(preloadedState:any = {}) {
	const loggerMiddleware = createLogger({
		level: "log",
	});

	const middlewareList: Middleware[] = [
		routerMiddleware(history),
		loggerMiddleware
	];

	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(...middlewareList)
	)

	return { store }
}
