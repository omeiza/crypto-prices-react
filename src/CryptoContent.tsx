import React, { Component } from 'react';
import CryptoList from './CryptoList';
import { CryptoDataType } from "./Crypto";

interface contentPropType {
	data: CryptoDataType
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