import React from "react";

function NftFocus({ focusedNft }) {
  return (
    <>
      <img src={focusedNft.imageUrl} alt="NftPicture" />
      <h2>
        {focusedNft?.collection?.name} #{focusedNft.tokenId?.slice(0, 4)}
      </h2>
      {focusedNft.lastSale !== null ? (
        <p>
          Price Paid: {focusedNft.lastSale?.totalPrice / 1000000000000000000}Eth
          or $
          {Math.round(
            (focusedNft.lastSale?.totalPrice / 1000000000000000000) *
              focusedNft.lastSale?.paymentToken.usdPrice
          )}
        </p>
      ) : (
        <p>This NFT was gifted</p>
      )}
      <p></p>
    </>
  );
}

export default NftFocus;
