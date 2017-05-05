import React, { Component } from 'react';
import './ResultsTableRow.css';

class ResultsTableRow extends Component {
	render() {
		const votesPct = (this.props.votes / this.props.votesTotal * 100).toFixed(2) + '%';

		return (
			<tr className="results-table-row">
				<th className="party" scope="row">{this.props.party}</th>
				<td className="votes">{this.props.votes.toLocaleString()}</td>
				<td className="votesPct">{votesPct}</td>
				<td className="seats">{this.props.seats}</td>
			</tr>
		);
	}
}

export default ResultsTableRow;
