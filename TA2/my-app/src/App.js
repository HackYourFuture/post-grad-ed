import React from 'react';
import './App.css';
import MovieList from './pages/MoviesList';
import MovieDetails from './pages/MovieDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={MovieList} />
				<Route exact path="/:id" component={MovieDetails} />
			</Router>
		</div>
	);
}

export default App;
