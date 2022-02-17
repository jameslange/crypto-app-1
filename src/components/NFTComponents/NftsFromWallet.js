import React, { useState, useEffect, useRef } from "react";
import AddCollector from "./AddCollector";
import Collectors from "./Collectors";
import TokenBalance from "../TokenComponents/TokenBalance";
import { useNFTBalances } from "react-moralis";
import initialWallets from "../../assets/data";
import PaginatedItems from "./PaginatedItems";
import useWalletData from "../../hooks/useWalletData";
import useCryptoBalances from "../../hooks/useCryptoBalances";
import "../style.css";
import useScroll from "../../hooks/useScroll";

const NftsFromWallet = () => {
  const { getNFTBalances, data } = useNFTBalances();
  const [nftBalances, setNftBalances] = useState([]);
  const [address, setAddress] = useState("");
  const [pageRequestNum, setPageRequestNum] = useState(500);
  const firstUpdate = useRef(true);
  const [currentItems, setCurrentItems] = useState([]);
  const [selected, setSelected] = useState(0);
  const [walletData, setWalletData] = useWalletData(initialWallets);
  const [itemOffset, setItemOffset] = useState(0);

  const [scrollUp, executeScroll] = useScroll();

  const [getBalances, fetchERC20Balances, nativeToken, balance, tokenData] = useCryptoBalances({ address });

  const [nftOrCurrencies, setNftOrCurrencies] = useState(false);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log(data);

    //retrieve NFTs if there are more than 500

    if (data && data.total > nftBalances.length) {
      getNFTBalances({
        params: { address: address, offset: pageRequestNum },
      });
      //remove items which lack proper data
      let filteredData = data.result.filter((nft) => nft.metadata !== null || nft.token_uri !== null);
      setNftBalances([...nftBalances, ...filteredData]);
      setPageRequestNum(pageRequestNum + 500);
    }
    //eslint-disable-next-line
  }, [data]);

  const toggleClick = () => {
    setNftOrCurrencies(!nftOrCurrencies);
  };

  //reset previous search and begin new search
  function fetchNftClick() {
    setPageRequestNum(500);
    setNftBalances([]);
    setCurrentItems(nftBalances.slice(0, 19));
    setSelected(0);
    setItemOffset(0);
    getNFTBalances({ params: { address: address } });
  }

  function fetchCoinsClick() {
    getBalances();
    fetchERC20Balances();
  }

  return (
    <section className="renderGradient pt-20">
      <div className="card shadow-2xl mx-20 walletGradient">
        <div className="card-body flex flex-col items-center ">
          <h2 className="card-title">{nftOrCurrencies ? "Search Tokens by Wallet" : "Search NFTs by Wallet"}</h2>
          <AddCollector setWalletData={setWalletData} walletData={walletData} />
          <Collectors walletData={walletData} setAddress={setAddress} />
          <button
            className="btn btn-outline my-10 bg-sky-400 max-w-sm md:w-1/6 "
            onClick={nftOrCurrencies ? fetchCoinsClick : fetchNftClick}
          >
            {nftOrCurrencies ? "Fetch Tokens" : "Fetch NFTs"}
          </button>
          {nftOrCurrencies ? <span>Displaying Tokens</span> : <span>Displaying NFTs</span>}

          <input type="checkbox" onClick={toggleClick} className="toggle toggle-lg mt-4" />
        </div>
      </div>
      <div>
        {nftOrCurrencies ? (
          balance && <TokenBalance nativeBalance={balance} tokenData={tokenData} />
        ) : (
          <PaginatedItems
            currentItems={currentItems}
            selected={selected}
            setSelected={setSelected}
            setCurrentItems={setCurrentItems}
            nftBalances={nftBalances}
            itemsPerPage={20}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
            scrollUp={scrollUp}
            executeScroll={executeScroll}
          />
        )}
      </div>
    </section>
  );
};

export default NftsFromWallet;
