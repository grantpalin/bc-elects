import React, { Component } from 'react';
import logo from './logo.svg';
import ResultsTable from './ResultsTable';
import ResultsTableRow from './ResultsTableRow';
import BarChart from './BarChart';

import './App.css';

class App extends Component {
	render() {
		const data = [
			{
				"year": 2013,
				"results": [
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
						"party": "Independent",
						"votes": 42559,
						"seats": 1
					},
					{
						"party": "Other",
						"votes": 16139,
						"seats": 0
					},
					{
						"party": "Rejected Ballots",
						"votes": 11763,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"votes": 1465229,
						"seats": 0
					}
				]
			},
			{
				"year": 2009,
				"results": [
					{
						"party": "Liberal",
						"votes": 751661,
						"seats": 49
					},
					{
						"party": "NDP",
						"votes": 691564,
						"seats": 35
					},
					{
						"party": "Conservative",
						"votes": 34451,
						"seats": 0
					},
					{
						"party": "Green",
						"votes": 134616,
						"seats": 0
					},
					{
						"party": "Independent",
						"votes": 17253,
						"seats": 1
					},
					{
						"party": "Other",
						"votes": 10997,
						"seats": 0
					},
					{
						"party": "Rejected Ballots",
						"votes": 11025,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"votes": 1587170,
						"seats": 0
					}
				]
			}
		];

		const results = data.map(function(year) {
			const votes = year.results.reduce(function(tot, val) { return tot + val["votes"] }, 0);
			const seats = year.results.reduce(function(tot, val) { return tot + val["seats"] }, 0);

			// little point showing seats for parties that have none, so filter out said parties
			const seatsData = year.results.filter(function(val) { return val.seats > 0; });

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

					<BarChart title={year.year + ' - Votes'} year={year.year} data={year.results.map(function(val) { return { party: val.party, value: val.votes }})} width={500} height={500} xlabel="Party" />
					<BarChart title={year.year + ' - Seats'} year={year.year} data={seatsData.map(function(val) { return { party: val.party, value: val.seats }})} width={500} height={500} xlabel="Party" />
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
