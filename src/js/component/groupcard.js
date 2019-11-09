import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";
import "../../styles/home.scss";
import _ from "lodash";

import Card from "react-bootstrap/Card";

export const GroupDetail = () => (
	<div className="container">
		<Consumer>
			{({ store, actions }) => {
				return store.groups.map((item, index) => {
					return (
						<div key={index} className="col-6 mx-auto">
							<Card>
								<Card.Body>
									<Card.Title>{item.post_title}</Card.Title>
									<Card.Text>{item.post_content}</Card.Text>
									<h5 className="members">Members</h5>
									<Card.Text>{_.join(item.members, ", ")}</Card.Text>
								</Card.Body>
							</Card>
						</div>
					);
				});
			}}
		</Consumer>
	</div>
);
