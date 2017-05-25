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
						"abbr": "LIB",
						"votes": 795274,
						"seats": 49
					},
					{
						"party": "New Democratic Party",
						"abbr": "NDP",
						"votes": 715855,
						"seats": 34
					},
					{
						"party": "Conservative",
						"abbr": "CP",
						"votes": 85637,
						"seats": 0
					},
					{
						"party": "Green",
						"abbr": "GP",
						"votes": 146685,
						"seats": 1
					},
					{
						"party": "Independent",
						"abbr": "IND",
						"votes": 42559,
						"seats": 1
					},
					{
						"party": "Other",
						"abbr": "other",
						"votes": 16139,
						"seats": 0
					},
					{
						"party": "Rejected Ballots",
						"abbr": "rejected",
						"votes": 11763,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"abbr": "dnv",
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
						"abbr": "LIB",
						"votes": 751661,
						"seats": 49
					},
					{
						"party": "New Democratic Party",
						"abbr": "NDP",
						"votes": 691564,
						"seats": 35
					},
					{
						"party": "Conservative",
						"abbr": "CP",
						"votes": 34451,
						"seats": 0
					},
					{
						"party": "Green",
						"abbr": "GP",
						"votes": 134616,
						"seats": 0
					},
					{
						"party": "Independent",
						"abbr": "IND",
						"votes": 17253,
						"seats": 1
					},
					{
						"party": "Other",
						"abbr": "other",
						"votes": 10997,
						"seats": 0
					},
					{
						"party": "Rejected Ballots",
						"abbr": "rejected",
						"votes": 11025,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"abbr": "dnv",
						"votes": 1587170,
						"seats": 0
					}
				]
			},
			{
				"year": 2005,
				"eligible": 3049153,
				"results": [
					{
						"party": "Liberal",
						"abbr": "LIB",
						"votes": 807118,
						"seats": 46
					},
					{
						"party": "New Democratic Party",
						"abbr": "NDP",
						"votes": 731719,
						"seats": 33
					},
					{
						"party": "Conservative",
						"abbr": "CP",
						"votes": 9623,
						"seats": 0
					},
					{
						"party": "Green",
						"abbr": "GP",
						"votes": 161842,
						"seats": 0
					},
					{
						"party": "Independent",
						"abbr": "IND",
						"votes": 16152,
						"seats": 0
					},
					{
						"party": "Other",
						"abbr": "other",
						"votes": 35889,
						"seats": 0
					},
					{
						"party": "Rejected Ballots",
						"abbr": "rejected",
						"votes": 11926,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"abbr": "dnv",
						"votes": 1274884,
						"seats": 0
					}
				]
			},
			{
				"year": 2001,
				"eligible": 3049153,
				"results": [
					{
						"party": "Liberal",
						"abbr": "LIB",
						"votes": 916888,
						"seats": 77
					},
					{
						"party": "New Democratic Party",
						"abbr": "NDP",
						"votes": 343156,
						"seats": 2
					},
					{
						"party": "Conservative",
						"abbr": "CP",
						"votes": 2417,
						"seats": 0
					},
					{
						"party": "Green",
						"abbr": "GP",
						"votes": 197231,
						"seats": 0
					},
					{
						"party": "Independent",
						"abbr": "IND",
						"votes": 14588,
						"seats": 0
					},
					{
						"party": "Other",
						"abbr": "other",
						"votes": 16811,
						"seats": 0
					},
					{
						"party": "Rejected Ballots",
						"abbr": "rejected",
						"votes": 8459,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"abbr": "dnv",
						"votes": 1274884,
						"seats": 0
					}
				]
			},
			{
				"year": 1996,
				"eligible": 3049153,
				"results": [
					{
						"party": "Liberal",
						"abbr": "LIB",
						"votes": 661929,
						"seats": 33
					},
					{
						"party": "New Democratic Party",
						"abbr": "NDP",
						"votes": 624395,
						"seats": 39
					},
					{
						"party": "Reform Party of BC",
						"abbr": "RP",
						"votes": 146734,
						"seats": 2
					},
					{
						"party": "Progressive Democratic Alliance",
						"abbr": "PDA",
						"votes": 90797,
						"seats": 1
					},
					{
						"party": "Green",
						"abbr": "GP",
						"votes": 31511,
						"seats": 0
					},
					{
						"party": "Independent",
						"abbr": "IND",
						"votes": 14588,
						"seats": 0
					},
					{
						"party": "Other",
						"abbr": "other",
						"votes": 12026,
						"seats": 0,
						"note": "Common Sense, Community, Family Party (CCF); Communist Party of British Columbia (COMM); Progressive Conservative Party of British Columbia (CP); Western Canada Concept Party of B.C. (WCC); Independent (IND); No Affiliation (N.A.)."
					},
					{
						"party": "Rejected Ballots",
						"abbr": "rejected",
						"votes": 9951,
						"seats": 0
					},
					{
						"party": "Did Not Vote",
						"abbr": "dnv",
						"votes": 0,
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

					<BarChart title={year.year + ' - Votes'} year={year.year} data={year.results.map(function(val) { return { party: val.party, abbr: val.abbr, value: val.votes }})} width={500} height={500} xlabel="Party" />
					<BarChart title={year.year + ' - Seats'} year={year.year} data={seatsData.map(function(val) { return { party: val.party, abbr: val.abbr, value: val.seats }})} width={500} height={500} xlabel="Party" />
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
