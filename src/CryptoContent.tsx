import React, { Component } from 'react';
import CryptoList from './CryptoList.js';

interface contentPropType {
	data: object[] | null
}

class CryptoContent extends Component<contentPropType, {}> {
	render() {
		return (
			<tbody className="crypto__list--body">
				<CryptoList data={this.props.data} />
			</tbody>
		);
	}
}

export default CryptoContent;