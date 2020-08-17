import { combineEpics } from "redux-observable";

import { authenticateEpic } from "./Modules/authenticate/epics";

const rootEpic = combineEpics(
	authenticateEpic
)

export default rootEpic