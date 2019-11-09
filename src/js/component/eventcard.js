import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Moment from "react-moment";

import "../../styles/home.scss";

export const EventDetail = () => (
	<div className="container">
		<Consumer>
			{({ store, actions }) => {
				return store.events.map((item, index) => {
					let groupID = item.meta_keys._group;
					let groupName = actions.findMeetupGroup(groupID);

					let parseMoment = (data, format) => {
						if (format == "date") {
							return <Moment format="MM/DD/YYYY">{data}</Moment>;
						}
						if (format == "time") {
							return (
								<Moment format="LT" parse="HH:mm:ss">
									{data}
								</Moment>
							);
						}
					};

					return (
						<div key={index} className="col-6 mx-auto">
							<Card>
								<Card.Body>
									<div
										className="row"
										style={{ background: "#f64060", padding: "5px", color: "#ffffff" }}>
										<div className="col-sm-7">
											<Card.Title>{item.post_title}</Card.Title>
										</div>
										<div className="col-sm-5">
											{parseMoment(item.meta_keys.day, "date")} |{" "}
											{parseMoment(item.meta_keys.time, "time")}
										</div>
										{/*<div>Group name: {item.meta_keys._group}</div>*/}
										<div className="col-sm-7">Group Name: {groupName}</div>
									</div>
									<Card.Text>{item.post_content}</Card.Text>
								</Card.Body>
							</Card>
						</div>
					);
				});
			}}
		</Consumer>
		<br />
		{/* <Consumer>
			{({ store, actions }) => {
				return (
					<button className="btn btn-success" onClick={() => actions.sayHi()}>
						Click Me
					</button>
				);
			}}
		</Consumer>*/}
	</div>
);
