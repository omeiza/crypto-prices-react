import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import CryptoContent from './CryptoContent.js';

interface StateType {
    cryptoResult: object[] | null
}

class App extends Component<{}, StateType> {
    constructor(props: any) {
        super(props);
        this.getCryptoData();
    }

    state: StateType = {
        cryptoResult: null
    }

    cryptoObject(): object[] {
        return JSON.parse('[{"Bitcoin": "BTC","Ethereum": "ETH","Ripple": "XRP","Bitcoin Cash": "BCH","Cardano": "ADA","Litecoin": "LTC","Dash": "DASH","Monero": "XHR","Bitcoin Gold": "BTG","Ethereum Classic": "ETC","Zcash": "ZEC"}]');
    }

    objectToArray(thisObject: object[]): any[] {
        return Object.keys(thisObject).map((k: any): any => {
            return thisObject[k];
        });
    }

    getCryptoData() {
        const cryptoSymbols = this.cryptoObject();
        fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${(this.objectToArray(cryptoSymbols)).join(",")}&tsyms=USD`)
            .then((response) => {
                return response.json();
            })
            .then((data: object[]) => {
                this.setState({
                    cryptoResult: data
                })
            })
            .catch((err) => {
                console.error(`Fetch error: ${err}`)
            })
    }

    render() {
        if (!this.state.cryptoResult) {
            return ( <p> Loading... </p> );
        }

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
                <CryptoContent data={this.state.cryptoResult} />
            </table>
        )
    }
}

ReactDOM.createRoot(
    document.getElementById('container') as HTMLElement
)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );