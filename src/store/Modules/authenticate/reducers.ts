import * as constants from "./constants"
export function authenticateReducer(state = {}, action:any) {
	switch (action.type) {
		case constants.AUTH:
			return {}
		case constants.AUTH_SUCCESS:
			return {}
		case constants.AUTH_FAILED:
			return {}
	}
}