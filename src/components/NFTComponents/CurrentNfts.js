import React, { useEffect, useState } from "react";

import NftFocus from "./NftFocus";
import Overlay from "react-overlay-component";
import RenderData from "./RenderData";
import { useMoralis } from "react-moralis";
function CurrentNfts({ currentItems }) {
  const [focusedNft, setFocusedNft] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { Moralis, isInitialized } = useMoralis();
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => {
    setOverlay(false);
    setTimeout(() => {
      setFocusedNft({});
    }, 500);
  };
  useEffect(() => {
    if (isInitialized) {
      Moralis.initPlugins();
    }
    // eslint-disable-next-line
  }, []);

  const configs = {
    animate: true,
    clickDismiss: true,
    escapeDismiss: true,
    focusOutline: true,
  };

  return (
    <>
      <RenderData
        currentItems={currentItems}
        setOverlay={setOverlay}
        setFocusedNft={setFocusedNft}
        setIsLoading={setIsLoading}
      />
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay} Moralis={Moralis}>
        {isLoading ? "loading" : <NftFocus focusedNft={focusedNft} />}
      </Overlay>
    </>
  );
}

export default CurrentNfts;
