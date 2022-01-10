import React from 'react'

function NftFocus({focusedNft}) {
    
    return(
        <>
        <img src={focusedNft.imageUrl} alt="NftPicture" />
        <h2>{focusedNft?.collection?.name} #{focusedNft.tokenId?.slice(0,8)}</h2>
       { focusedNft.lastSale!==null ? <p>Price Paid: { focusedNft.lastSale?.totalPrice/1000000000000000000}Eth or ${ Math.round(focusedNft.lastSale?.totalPrice/1000000000000000000 * focusedNft.lastSale?.paymentToken.usdPrice)}</p>: <p>This NFT was gifted</p>}
        <p></p>
        </>
    )
    
}

export default NftFocus









{/* <div name class="flex items-center w-full px-4 py-10 bg-cover card bg-indigo-400">
<button className="danger" onClick={() => { setOverlay(false)}}></button>
     <div class="card glass lg:card-side text-neutral-content">
        <figure class="p-6">
            <img src="https://picsum.photos/id/1005/300/200" class="rounded-lg shadow-lg" alt="err0r"/>
        </figure> 
        <div class="max-w-md card-body">
            <h2 class="card-title">Glass</h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div class="card-actions">
                <button class="btn glass rounded-full">Get Started</button>
            </div>
        </div>
    </div>
</div> */}