import React, { Component } from 'react';
import { CryptoCurrencyDataType } from "./Crypto";

interface ListItemPropType {
	key: number;
	count: number;
	data: CryptoCurrencyDataType;
}

class CryptoListItem extends Component<ListItemPropType, {}> {
	render() {
		return (
			<tr key = {this.props.count}>
				<td>{this.props.count}</td>
				<td>{this.props.data["USD"]["FROMSYMBOL"]}</td>
				<td>{this.props.data["USD"]["PRICE"]}</td>
				<td>{this.props.data["USD"]["SUPPLY"]}</td>
				<td>{this.props.data["USD"]["CHANGE24HOUR"]}</td>
			</tr>
		)
	}
}

export default CryptoListItem;