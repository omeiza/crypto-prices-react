import React, { Component } from 'react';

interface ListItemPropType {
	count: number;
	data: object;
}

class CryptoListItem extends Component<ListItemPropType, {}> {
	render() {
		return (
			<tr index = {index}>
				<td>{index}</td>
				<td>{this.props.data["USD"]["FROMSYMBOL"]}</td>
				<td>{this.props.data["USD"]["PRICE"]}</td>
				<td>{this.props.data["USD"]["SUPPLY"]}</td>
				<td>{this.props.data["USD"]["CHANGE24HOUR"]}</td>
			</tr>
		)
	}
}

export default CryptoListItem;