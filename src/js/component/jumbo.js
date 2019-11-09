import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";

import "../../styles/home.scss";

export const Jumbo = () => (
	<Jumbotron className="text-center">
		<h1 className="jumbo-title">The real world is calling</h1>
		<p className="jumbo-text">Join a local group to meet people, try something new, or do more of what you love.</p>
		<Link to="/groups">
			<span className="btn btn-primary btn-lg" href="#" role="button">
				View Groups
			</span>
		</Link>
	</Jumbotron>
);
