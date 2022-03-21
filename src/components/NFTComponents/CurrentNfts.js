import React, { useState } from "react";

import NftFocus from "./NftFocus";
import Overlay from "react-overlay-component";
import RenderData from "./RenderData";

function CurrentNfts({ currentItems }) {
  const [focusedNft, setFocusedNft] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => {
    setOverlay(false);
    setTimeout(() => {
      setFocusedNft({});
    }, 500);
  };

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
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        {isLoading ? "loading" : <NftFocus focusedNft={focusedNft} />}
      </Overlay>
    </>
  );
}

export default CurrentNfts;
