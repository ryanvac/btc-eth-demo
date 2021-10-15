// symbol: BTC | ETH
// blockchain.com
async function getPriceUSD1(symbol) {
    const res = await fetch(`https://api.blockchain.com/v3/exchange/l2/${symbol}-USD`); 
    const data = await res.json(); 
    const highestBid = data.bids.map(x => x.px).sort((a,b) => b - a)[0]; 
    const lowestAsk = data.asks.map(x => x.px).sort((a,b) => a - b)[0]; 
    return {
        lowestAsk,
        highestBid
    }
}

// symbol: BTC | ETH
// coinbase.com
async function getPriceUSD2(symbol) {
    const res = await fetch(`https://api.coinbase.com/v2/prices/${symbol}-USD/buy`); 
    const data = await res.json(); 
    const res2 = await fetch(`https://api.coinbase.com/v2/prices/${symbol}-USD/sell`); 
    const data2 = await res2.json(); 
    return {
        lowestAsk: parseFloat(data2.data.amount),
        highestBid: parseFloat(data.data.amount)
    }
}

async function fillInfo() {
    // blockchain.com rates
    const btc1 = await getPriceUSD1('BTC'); 
    document.querySelector(".blockchain > .btc > div > .buy").innerText = btc1.lowestAsk;
    document.querySelector(".blockchain > .btc > div > .sell").innerText = btc1.highestBid; 
    const eth1 = await getPriceUSD1('ETH'); 
    document.querySelector(".blockchain > .eth > div > .buy").innerText = eth1.lowestAsk;
    document.querySelector(".blockchain > .eth > div > .sell").innerText = eth1.highestBid; 

    // coinbase.com rates
    const btc2 = await getPriceUSD2('BTC'); 
    document.querySelector(".coinbase > .btc > div > .buy").innerText = btc2.lowestAsk;
    document.querySelector(".coinbase > .btc > div > .sell").innerText = btc2.highestBid; 
    const eth2 = await getPriceUSD2('ETH'); 
    document.querySelector(".coinbase > .eth > div > .buy").innerText = eth2.lowestAsk;
    document.querySelector(".coinbase > .eth > div > .sell").innerText = eth2.highestBid; 

    document.getElementById("buy-btc").innerText = btc1.lowestAsk < btc2.lowestAsk ? 'blockchain.com' : 'coinbase.com'
    document.getElementById("sell-btc").innerText = btc1.highestBid > btc2.highestBid ? 'blockchain.com' : 'coinbase.com'
    document.getElementById("buy-eth").innerText = eth1.lowestAsk < eth2.lowestAsk ? 'blockchain.com' : 'coinbase.com'
    document.getElementById("sell-eth").innerText = eth1.highestBid > eth2.highestBid ? 'blockchain.com' : 'coinbase.com'
}

fillInfo(); 