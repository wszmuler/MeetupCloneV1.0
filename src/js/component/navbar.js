import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const TopNavbar = () => (
	<Navbar bg="light">
		<Navbar.Brand as={Link} to="/">
			<img src="https://www.meetup.com/mu_static/en-US/logo--script.004ada05.svg" alt="" height="44px" />
		</Navbar.Brand>
		<Nav className="">
			<Nav.Item>
				<Nav.Link as={Link} to="/">
					Home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={Link} to="/groups">
					Groups
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={Link} to="/events">
					Events
				</Nav.Link>
			</Nav.Item>
		</Nav>
	</Navbar>
);
