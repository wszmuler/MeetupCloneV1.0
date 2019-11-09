import React from "react";
import { Consumer } from "../store/appContext";
import { EventDetail } from "../component/eventcard";

export const Events = () => (
	<div>
		<div className="text-center mt-5">
			<EventDetail />
		</div>
	</div>
);
