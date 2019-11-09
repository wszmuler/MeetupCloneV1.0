import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const Footer = () => (
	<Navbar expand="lg" bg="dark" variant="dark">
		<Nav className="mr-auto">
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
