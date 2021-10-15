# btc-eth-demo

Web page shoes the buy and sell prices of BTC and ETH in USD. Data taken from [blockchain.com](https://www.blockchain.com/) and [coinbase.com](https://www.coinbase.com/). 

**Instructions**

We would like to look at a webpage that shows:

1. Prices of Bitcoin and Ethereum from two (any) different exchanges/sources. 
    * Differentiate buy and sell price clearly 
2. Recommendations on which exchange one should buy and/or sell.
    * Recommend where to buy and where to sell. Each of the recommendation can be a different exchange

**Questionnaire**

1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
    * The logic in to fill price information can be abstracted to allow for additional currencies or exchanges. 
2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
    * This was done with vanilla JavaScript as it was quick to put together. 
3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
    * Don't have users directly hit the price APIs. Potential caching. 
4. What are some other enhancements you would have made, if you had more time to do this implementation
    * Abstractions to allow for easier modifications/additions. 
