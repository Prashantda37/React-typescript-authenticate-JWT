import { ofType } from "redux-observable";
import { of } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";
import { AUTH } from "./constants";
import { authSuccess, authFailed } from "./actions";

export const authenticateEpic = (
	action$: any,
	state$: any,
	{ authenticate }:any
) => action$.pipe(
	ofType(AUTH),
	mergeMap(({ payload }: any) => {
		return authenticate(payload).pipe(
			mergeMap(({ data }) => {
				return of(authSuccess(data));
			}),
			catchError(error => of(authFailed(error)))
		);
	})
)