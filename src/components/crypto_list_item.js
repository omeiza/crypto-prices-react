import React from 'React';

const CryptoListItem = (props) => {
    const index = props.count,
        data = props.data;

    return (
        <tr index = { index }>
            <td>{ index }</td>
            <td>{ data["USD"]["FROMSYMBOL"] }</td>
            <td>{ data["USD"]["PRICE"] }</td>
            <td>{ data["USD"]["SUPPLY"] }</td>
            <td>{ data["USD"]["CHANGE24HOUR"] }</td>
        </tr>
    )
}

export default CryptoListItem;