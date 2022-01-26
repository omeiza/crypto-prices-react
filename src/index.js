import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CryptoContent from './components/crypto_content.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            crypto_result: null
        };

        this.getCrytpoData();
    }

    cryptoObject() {
        return JSON.parse('[{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}]');
    }

    objectToArray(object) {
        return Object.keys(object).map((k) => {
            return object[k]
        });
    }

    getCrytpoData() {
        let cryptoList = this.cryptoObject(),
            cryptoArray = this.objectToArray(cryptoList[0]),
            fsyms = [];

        cryptoArray.map((j) => fsyms.push(j));
        fsyms = fsyms.join(",");

        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms}&tsyms=USD`)
            .then((response) => {
                return response.json()
            })

            .then((data) => {
                this.setState({
                    crypto_result: data
                })
            })

            .catch((err) => {
                console.error(`Fetch error: ${err}`)
            })
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
                    <CryptoContent data={this.state.crypto_result} />
                </table>
            )
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
