import React, { Component } from 'react';
import './ResultsTable.css';

class ResultsTable extends Component {
	render() {
		return (
			<table className="results-table">
				{this.props.caption ? <caption>{this.props.caption}</caption> : null}
				<thead>
					<tr>
						<th className="party">Party</th>
						<th className="votes">Votes</th>
						<th className="votesPct">Votes %</th>
						<th className="seats">Seats</th>
					</tr>
				</thead>
				<tbody>
					{this.props.data ? this.props.data : null}
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td className="votes">{this.props.votes.toLocaleString()}</td>
						<td></td>
						<td className="seats">{this.props.seats}</td>
					</tr>
				</tfoot>
			</table>
		);
	}
}

export default ResultsTable;
