import * as constants from "./constants";

interface Auth {
	type: typeof constants.AUTH;
	payload: any;
}

interface AuthSuccess {
	type: typeof constants.AUTH_SUCCESS;
	payload: any;
}

interface AuthFailed {
	type: typeof constants.AUTH_FAILED;
	payload: any;
}

export function auth(user: Auth): Auth{
	return { type: constants.AUTH, payload: { ...user } };
}

export function authSuccess(user: any): AuthSuccess {
	return { type: constants.AUTH_SUCCESS, payload: user };
}

export function authFailed(error:any): AuthFailed {
	return { type: constants.AUTH_FAILED, payload: error }
}