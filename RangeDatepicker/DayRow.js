'use strict'
import React from 'react';
import {
	View, Text, Image
} from 'react-native';
import Day from './Day';
import moment from 'moment';

export default class DayRow extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (JSON.stringify(nextProps.days) == JSON.stringify(this.props.days))
			return false;

		return true;
	}

	render() {
		const format = 'hh:mm:ss';
		const currentTime = moment()
		const previousDay = moment().subtract(1, 'days').format('YYYYMMDD');
		const beforeTime = moment('00:00:00', format);
		const afterTime = moment('04:00:00', format);
		const gracePeriod = currentTime.isBetween(beforeTime, afterTime) ? true : false;
		let showMoon = false; 
		return (
			<View style={{ marginBottom: 2, marginTop: 2, flexDirection: 'row' }}>
				{

					

					this.props.days.map((day, i) => {
						showMoon = gracePeriod && (day.date === previousDay) ? true : false 
						return (
							<Day key={i} dayProps={this.props.dayProps} onSelectDate={this.props.onSelectDate} day={day} showMoon={showMoon} />
						)
					})
				}
			</View>
		);
	}
}
