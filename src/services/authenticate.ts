import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { http } from "./baseRequest";

export function authenticate(user:any) {
	return http.post(`/authenticate`, { ...user }).pipe(
		map(response => {
			return response.data;
		}),
		catchError(error => {
			return throwError(error.response && error.response.data);
		})
	);
}