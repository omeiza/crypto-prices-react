import React, { Component } from 'react';
import CryptoListItem from './CryptoListItem.js';

interface listPropTypes {
	data: object[] | null
}

class CryptoList extends Component<listPropTypes, {}> {
	render() {
		let count = 0;
		const data = this.props.data['DISPLAY'];

		if (!data) {
			return (
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
				</tr>
			);
		}

		return Object.keys(data).map((k) => {
			count++;
			return (
				<CryptoListItem key={count} count={count} data={data[k]} />
			)
		});
	}
}

export default CryptoList;