import React from 'react';

const CryptoListItem = (props: { count: any; data: any; }) => {
	const index = props.count;
	const data = props.data;

	return (
		<tr index = {index}>
			<td>{index}</td>
			<td>{data["USD"]["FROMSYMBOL"]}</td>
			<td>{data["USD"]["PRICE"]}</td>
			<td>{data["USD"]["SUPPLY"]}</td>
			<td>{data["USD"]["CHANGE24HOUR"]}</td>
		</tr>
	)
}

export default CryptoListItem;