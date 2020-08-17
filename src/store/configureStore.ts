import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, Middleware } from "redux";
import { createLogger } from "redux-logger";
import createRootReducer from "./rootReducer";
import { createEpicMiddleware } from "redux-observable";
import dependencies from "./dependencies";
import rootEpic from "./epicRoot";

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware({
	dependencies,
});

const rootReducer = createRootReducer() as any;

export default function configureStore(preloadedState:any = {}) {
	const loggerMiddleware = createLogger({
		level: "log",
	});

	const middlewareList: Middleware[] = [
		epicMiddleware,
		routerMiddleware(history),
		loggerMiddleware,
	];

	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(...middlewareList)
	);

	epicMiddleware.run(rootEpic)
	return { store }
}
