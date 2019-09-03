import React from 'react';
import CryptoList from './crypto_list.js';

const CryptoContent = (props) => {
    const data = props.data;

    return (
        <tbody className="crypto__list--body">
            <CryptoList data={data} />
        </tbody>
    );
}

export default CryptoContent;
