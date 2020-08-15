import React from "react";
import NavHeader from "../Nav/Public/NavHeader";

export default ({ children }: any) => {
	return (<div>
		<div>
			<NavHeader />
		</div>
		<div className="mt-1">
			{children}
		</div>
	</div>)
}