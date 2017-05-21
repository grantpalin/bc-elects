import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import './BarChart.css';

class BarChart extends Component {
	constructor(props){
		super(props);
		this.createBarChart = this.createBarChart.bind(this);
	}

	componentDidMount() {
		this.createBarChart();
	}

	componentDidUpdate() {
		this.createBarChart();
	}

	createBarChart() {
		const parties = this.props.data.map(function(val) { return val.party });
		const values = this.props.data.map(function(val) { return val.value });

		const node = this.node;

		const dataMax = max(values);
		const yScale = scaleLinear().domain([0, dataMax]).range([0, this.props.height - 25]);
		const barCount = values.length;
		const barWidth = (100 / barCount);

		select(node)
			.selectAll("rect")
			.data(values)
			.enter()
			.append("rect");

		select(node)
			.selectAll("rect")
			.data(values)
			.exit()
			.remove();

		select(node)
			.selectAll("rect")
			.data(this.props.data)
			.attr("x", (d, i) => (i * barWidth) + "%")
			.attr("y", d => this.props.height - yScale(d.value))
			.attr("height", d => yScale(d.value))
			.attr("width", barWidth + "%")
			.attr("class", d => "bar " + d.abbr.toLocaleLowerCase());


		select(node)
			.append("text")
			.text(this.props.title)
			.attr("class", "chart-title")
			.attr("x", this.props.width / 2)
			.attr("y", "15px");

		select(node)
			.append("text")
			.attr("class", "x label")
			.attr("text-anchor", "end")
			.attr("x", this.props.width / 2)
			.attr("y", this.props.height)
			.text(this.props.xlabel);
	}

	render() {
		return <svg className="chart bar-chart" ref={node => this.node = node} width={this.props.width} height={this.props.height} />
	}
}

export default BarChart;
