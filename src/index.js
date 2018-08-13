import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CryptoContent from './components/crypto_content.js';

const cryptoObject = JSON.parse('[{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}]');

class App extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            crypto_result: null
        };

        this.getCrytpoData();
    }

    objectToArray(object) {
        const newArray = Object.keys(object).map((k) => {
            return object[k]
        });
    
        return newArray;
    }

    getCrytpoData() {
        let cryptoArray = this.objectToArray(cryptoObject[0]),
            fsyms = new Array();

        cryptoArray.map((j) => fsyms.push(j));
        fsyms = fsyms.join(",");

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=USD`)
            .then (response => response.json())
            .then (data => this.setState({
                    crypto_result: data
                })
            )
            .catch((err) => console.log(`Fetch error: ${err}`));
    }

    render() {
        if (!this.state.crypto_result) {
            return (
                <p> Loading... </p>
            )
        } else {
            return (
                <table className="crypto__list">
                    <thead className="crypto__list--header">
                        <tr>
                            <th>#</th>
                            <th>Crypto</th>
                            <th>Price</th>
                            <th>Circulating Supply</th>
                            <th>Change (24h)</th>
                        </tr>
                    </thead>
                    <CryptoContent data = { this.state.crypto_result } />
                </table>
            )
        }
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('container')
);
