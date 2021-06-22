import React from 'react';
import CryptoListItem from './crypto_list_item.js';

const CryptoList = (props) => {
    let count = 0;
    const data = props.data['DISPLAY'];

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

    const allCryptoItem = Object.keys(data).map((k) => {
        count++;

        return (
            <CryptoListItem key = { count } count = { count } data = { data[k] } />
        )
    });

    return allCryptoItem;
}

export default CryptoList;