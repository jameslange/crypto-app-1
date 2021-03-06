import React, { useState, useEffect } from "react";
import { useVerifyMetadata } from "../../hooks/useVerifyMetadata";
import nftpic from "../../assets/pics/nft.png";
import { BallTriangle } from "react-loader-spinner";
import { useMoralis } from "react-moralis";
function RenderData({ currentItems, setOverlay, setIsLoading, setFocusedNft }) {
  const { verifyMetadata } = useVerifyMetadata();
  const [loaded, setLoaded] = useState(false);
  const { Moralis, isInitialized } = useMoralis();
  /* WAITING TO SEE IF OPENSEA API WILL BE FIXED OR NEED TO USE MORALIS useTRANSACTIONS HOOK */

  useEffect(() => {
    if (isInitialized) {
      Moralis.initPlugins();
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = async (address, ID) => {
    setOverlay(true);
    try {
      setIsLoading(true);
      let res = await Moralis.Plugins.opensea.getAsset({
        network: "mainnet",
        tokenAddress: address,
        tokenId: ID,
      });

      setIsLoading(false);
      setFocusedNft(res);
      console.log(res);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setFocusedNft({});
    }
  };

  // const cloudMeta = async (url) => {
  //   const params = { theUrl: url };
  //   const metadata = await Moralis.Cloud.run("fetchJSON", params);
  //   console.log(metadata);
  //   return metadata;
  // };

  const fixURL = (url) => {
    if (url == null) return null;
    if (url.startsWith("ipfs")) return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)[0];
    if (url.startsWith("data:image/svg")) return url;
    if (url.includes("/ipfs/ipfs/")) return url.split("/ipfs/ipfs")[0] + "/ipfs/" + url.split("/ipfs/ipfs/")[1];
    if (!url.includes("/")) return "https://gateway.ipfs.io/ipfs/" + url;
    if (url.startsWith("https://gateway.pinata.cloud/ipfs/"))
      return "https://gateway.ipfs.io/ipfs/" + url.split("ipfs")[1];

    return url + "?format=json";
  };

  return (
    <>
      {currentItems &&
        currentItems.map((nft, i) => {
          nft = verifyMetadata(nft);

          let address = nft.token_address;
          let ID = nft.token_id;

          return (
            <div
              key={i}
              onClick={() => {
                handleClick(address, ID);
              }}
              className="card max-h-96 min-h-[23rem] aspect-[1/1.5] hover:bottom-4 relative card-bordered rounded-3xl shadow-2xl pb-3 card-compact lg:card-normal cursor-pointer bg-palSilver"
            >
              <figure className="h-4/5 object-contain">
                <img
                  className="w-full max-h-full"
                  src={(nft.image && fixURL(nft.image)) || (nft.metadata && fixURL(nft.metadata.image_url))}
                  alt="Error Loading NFT"
                  onLoad={() => setLoaded(true)}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = nftpic;
                  }}
                />
              </figure>
              <div className="card-body shadow-inner ">
                <h3 className="card-title flex justify-center align-middle ">
                  {(nft.metadata && nft.metadata.name) || (nft.name && nft.name)}
                </h3>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default RenderData;
