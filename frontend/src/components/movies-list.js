import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { link } from "react-router-dom";

const MoviesList = (props) => {
	const [movies, setMovies] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");
	const [searchRating, setSearchRating] = useState("");
	const [ratings, setRatings] = useState("");
};
