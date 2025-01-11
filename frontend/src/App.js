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
	const [user, setUser] = React.useState(null);

	async function login(user = null) {
		setUser(user);
	}

	async function logout() {
		setUser(null);
	}

	return (
		<Router>
			<div className="App">
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Movie Reviews Web App</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as={Link} to={MoviesList}>
								All Movies
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				
				{user ? (
					<Nav.Link as="button" onClick={logout}>
						Logout User
					</Nav.Link>
				) : (
					<Nav.Link as={Link} to="/login">
						Log in
					</Nav.Link>
				)}
				<Routes>
					<Route path="/" element={<MoviesList />} />
					<Route
						path="/movies/:id/review"
						element={<AddReview user={user} />}
					/>
					<Route path="/movies/:id/" element={<Movie user={user} />} />
					<Route path="/login" element={<Login login={login} />} />
				</Routes>
				/</Navbar>

			</div>
			
		</Router>
	);
}

export default App;
