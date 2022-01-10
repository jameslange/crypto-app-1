import React,{useEffect, useState} from 'react'

import { useMoralis } from "react-moralis";
import NftFocus from './NftFocus';
import Overlay from "react-overlay-component";
import RenderData from './RenderData';

function CurrentNfts({currentItems}) {
  
    const { Moralis, isInitialized, ...rest } = useMoralis();
    const [focusedNft, setFocusedNft] = useState({})

    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
        // top: `5em`,
        // clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
    };

    useEffect(()=>{
        if(isInitialized){
         Moralis.initPlugins();
        }
    },[]);
    
    // useEffect(()=>{

    //   let res =  currentItems.map(async(nft)=>{
           
    //     try{let curr = await Moralis.Plugins.opensea.getAsset({
    //             network: 'mainnet',
    //             tokenAddress: nft.token_address,
    //             tokenId: nft.token_id,
    //           });
    //           console.log(curr)
    //         }catch(e){console.log(e)}
    //     })
    //     console.log(res)
    // }, [currentItems])


   

    
    
    return (
        
        <>
            <RenderData currentItems={currentItems} Moralis={Moralis} setOverlay={setOverlay} setFocusedNft={setFocusedNft}/>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
                 <NftFocus focusedNft={focusedNft}/>
            </Overlay>
       
        </>
    )
}

export default CurrentNfts

