# Crypto App

Blockchain is one of the fastest moving industries today. Out of all the different fields within blockchain, NFTs have arguably received the most attention over the past year. So many celebrities have jumped on the NFT train this year that it is difficult to keep track of them. This app allows for you to quickly and easily browse through the different NFTs and ERC20 tokens held in the ethereum wallets of a number of different well-known people, and gives the ability to add an Ethereum wallet address in order to track yourself.

I utilized the final project in the React module at the coding school that I am currently attending to explore deeper into this field which fascinates me. For this project I used Moralis in order to query the Ethereum blockchain and retrieve the NFTs as well as Ethereum and ERC20 token balances.

## A little background..

An NFT is essentially code that is written to a blockchain which points to something else. By owning an NFT one may verify that they are in fact the owner of that particular piece of property, as it is written to the blockchain and therefore verifiable and immutable. In the past year or so there has been a lot of hype regarding NFTs with many big names and corporations entering the space. Naturally this has brought nefarious actors along with it. Anyone can download the image file itself of any given NFT, but it does not make this person the owner of this NFT. It is also easily possible to mint your own NFTs which is common as people are either exploring the technology or are attempting to make some quick cash. This is also a problem because it allows for aforementioned nefarious actors to mint an NFT which points to a copied image file, or very similar image, of a well-known NFT collection. There are also many cases of "Rug Pulls" in which aggressive marketing tactics are used to convince people to purchase a particular NFT collection or coin, promising value for the buyers, and then all of a sudden taking all the money and leaving the buyers with an NFT or coin worth nothing. This space, in its infancy, is rife with opportunities to make money, but also with opportunities to lose money. Crypto is arguably the riskiest asset class of today and this risk is the price that one pays to make returns on investments which are asymmetrical to other investment opportunities.

Even within the legitimate NFT collections it is seemingly common practice for the owners of the NFT collections to purchase their own NFTs in order to artificially inflate the price of the other NFTs in their collection. Melania Trump is suspected of having done this as an anonymous buyer paid $180,000 in Solana for an NFT, and it was likely Melania herself. This is not illegal but it is certainly misleading and deceptive at best.

It was not clear to me upon beginning this project that roughly 80% of NFTs are currently fake or scams. It is easy to see evidence of this while exploring the NFTs held by the celebrity wallets. Many NFTs are simply minted to these wallets in order to market the individual NFT collections. I had suspected this in the beginning and this was confirmed once I utilized the OpenSea plugin to the Moralis SDK to fetch further data pertaining to each NFT. The price of many of these NFTs were missing because the owner of the wallets had never actually paid for the NFTs, they were simply sent to the wallets unrequested.

Another issue with NFTs is that they are highly centralized on OpenSea. It is recently estimated that 97% of NFT transaction volume is through this platform. This is a problem because it introduces an obvious point of failure within the ecosystem, giving too much power to OpenSea, and making it a high-value target for hackers.

We are currently utilizing this technology to claim ownership of pictures of monkeys or pixelated punk rockers. The space requires further development and innovation in order to realize its true potential. In the same way that many didn't see the value of the internet, email, or smart phones, many people today don't see the value of NFTs and Cryptocurrencies. Trading digital collectables is how we are using NFTs today but tomorrow we may be using NFTs to trade Real Estate, verify education or health records, and to ensure the authenticity of items which we purchase.

## Methodology

I first use the Moralis SDK to retrieve an object with several different key value pairs namely the total number of NFTs in the wallet, an array of the individual NFT objects, and pagination keys. I then take the results array and store each of these NFTs in state. Each page contains 500 NFTs so I must again fetch the remaining NFTs and append them to my state array of NFT objects.

Once stored in state I utilize the React Paginate component in order to display 20 NFTs per page. From here I render the individual NFT cards which requires me to attempt to fix any improperly stored data. For those NFTs with no metadata, I use the token_uri attribute to attempt to retrieve the metadata myself by fetching it from the provided address. The useVerifyMetadata hook, which I borrow from Moralis, handles this issue by fetching the data for me and writing it to the metadata key of the NFT. If the data is not there, it replaces the metadata with a reactive object which updates when the data becomes available.

The best practice for the storage of this data is using IPFS, or the Inter-Planetary File System. This is a decentralized internet protocol which uses a distributed network of computers to host data. Data hosted using traditional HTTP is not preferable due to the nature of the protocol which requires it to be maintained on centralized servers. Today's browsers do not support IPFS, therefore it is necessary to redirect to a gateway in order to access the required data. One of these gateways is "https://gateway.ipfs.io/ipfs/". The param which come after the / point to the location of the stored data.

## Challenges I faced

One of the biggest challenges I faced when coding this project was the task of improperly stored data on the blockchain. Anyone is able to mint an NFT, but there are many who fail to do so properly, not storing a metadata object with the NFT is one example.

I had utilized the OpenSea plugin to the Moralis SDK to fetch further data from OpenSea upon a click event attached to each NFT card. Unfortunately at this moment it is not functioning due to the OpenSea API itself having further restricted access to the free API. It is currently very difficult to receive a key for the OpenSea API so I am therefore confined to the tools I have available.

There are many more features that I would like to implement in the future, time permitting. A crypto news page and a crypto market price aggregator using the coingecko api are two examples.

## Thank you for reading and I hope you enjoyed my project!

### Some light reading

[NYSE files patent for NFT marketplace](https://www.coindesk.com/business/2022/02/15/nyse-files-trademark-application-for-its-own-nft-marketplace/)

[Melania Trump launches NFT collection](https://www.forbes.com/sites/lisakim/2022/02/17/melania-trump-is-launching-potus-nft-collection-amid-questions-surrounding-her-own-digital-art-collection/)

[Why Big Brands are Spending Millions on NFTs](https://www.forbes.com/sites/robertfarrington/2021/12/25/why-big-brands-are-spending-millions-on-nfts/)
