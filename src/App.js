import React, { Component } from 'react';
import logo from './logo.svg';
import ResultsTable from './ResultsTable';
import ResultsTableRow from './ResultsTableRow';
import './App.css';

class App extends Component {
	render() {
		const data = [
			{
				"year": 2013,
				"results": [
					{
						"party": "BC First",
						"votes": 1275,
						"seats": 0
					},
					{
						"party": "Liberal",
						"votes": 795274,
						"seats": 49
					},
					{
						"party": "NDP",
						"votes": 715855,
						"seats": 34
					},
					{
						"party": "Conservative",
						"votes": 85637,
						"seats": 0
					},
					{
						"party": "Green",
						"votes": 146685,
						"seats": 1
					},
					{
						"party": "Libertarian",
						"votes": 2050,
						"seats": 0
					},
					{
						"party": "Independent",
						"votes": 42559,
						"seats": 1
					},
					{
						"party": "Other",
						"votes": 12814,
						"seats": 0
					}
				]
			}
		];

		const results = data.map(function(year) {
			const votes = year.results.reduce(function(tot, val) { return tot + val["votes"] }, 0);
			const seats = year.results.reduce(function(tot, val) { return tot + val["seats"] }, 0);

			return (
				<section className="results-section">
					<h2 className="results-section-title">{year.year}</h2>

					<ResultsTable
						caption={year.year + ' Results'}
						votes={votes}
						seats={seats}
						data={year.results.map(function(val, i) {
							return <ResultsTableRow key={i} party={val.party} votes={val.votes} votesTotal={votes} seats={val.seats} seatsTotal={seats} /> })
						} />
				</section>
			)
		});

		return (
			<div className="app">
				<div className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<h1>BC Elects</h1>
				</div>

				<p className="app-intro">A high-level look at provincial election results.</p>

				{results}

				<p><small>All data is sourced from <a href="http://142.34.128.33/resources/voting-results/provincial-general-elections-results/">Elections BC</a>. This web app, written by Grant Palin, is <a href="https://github.com/grantpalin/bc-elects">open source</a>.</small></p>
			</div>
		);
	}
}

export default App;
