import React from 'react';
import CryptoList from './CryptoList.js';

const CryptoContent = (props: { data: any; }) => {
	const data = props.data;

	return (
		<tbody className="crypto__list--body">
			<CryptoList data={data} />
		</tbody>
	);
}

export default CryptoContent;