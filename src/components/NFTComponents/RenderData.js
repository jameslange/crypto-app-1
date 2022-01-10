import React from 'react'
import { useVerifyMetadata } from '../../hooks/useVerifyMetadata';


function RenderData({currentItems, setOverlay, setFocusedNft, Moralis}) {
    const {verifyMetadata} = useVerifyMetadata()
    
    const handleClick=async(address, ID)=>{
        setOverlay(true)
        try{let res = await Moralis.Plugins.opensea.getAsset({
            network: 'mainnet',
            tokenAddress: address,
            tokenId: ID,
            
        });
        setFocusedNft(res)
        console.log(res);
        
    }catch(e){console.log(e)}
}

    const fixURL = (url) => {
        if(url==null) return null;
        if (url.startsWith("ipfs")) return "https://ipfs.moralis.io:2053/ipfs/" + url.split("ipfs://").slice(-1)[0];
        if (url.startsWith('data:image/svg')) return url;
        if(url.includes('/ipfs/ipfs/')) return url.split('/ipfs/ipfs')[0] + '/ipfs/' + url.split('/ipfs/ipfs/')[1];
        if (url.startsWith('https://gateway.pinata.cloud/ipfs/')) return 'https://gateway.ipfs.io/ipfs/' + url.split('ipfs')[1]
        
            return url+"?format=json"
    }
    
    return (
        <>

        { currentItems && currentItems.map((nft, i) =>{
          nft = verifyMetadata(nft);
          
          let address = nft.token_address;
          let ID = nft.token_id;

          return(  <div key={i}  
            
            onClick={()=>{
                handleClick(address, ID)
            }
                
            } className="card max-h-96 w-72 aspect-[1/1.5] hover:translate-y-40 card-bordered border-solid border-4 rounded border-indigo-900 shadow-2xl card-compact lg:card-normal cursor-pointer">
            <figure>
                <img className="aspect-square max-h-80 w-full object-cover" src={(nft.image && fixURL(nft.image)) || (nft.metadata && fixURL(nft.metadata.image_url))} alt='nftimg' />
            </figure> 
            <div className="card-body shadow-inner bg-blue-100">
                <h2 className="card-title flex justify-center align-middle pb-5">{ (nft.metadata && nft.metadata.name)||(nft.name && nft.name)}</h2> 
                </div>
            </div>
            
        )})}
        </>
    )
}

export default RenderData
