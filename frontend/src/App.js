import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

// Components

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link>
								<Link to={"/movies"}>Movies</Link>
							</Nav.Link>
							<Nav.Link>
								{false ? <a>Logout User</a> : <Link to={"/login"}>Login</Link>}
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Routes>
					<Route exact path="/" component={MoviesList} />
					<Route path="/movies/:id" component={Movie} />
					<Route path="/add-review/:id" component={AddReview} />
					<Route path="/login" component={Login} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
