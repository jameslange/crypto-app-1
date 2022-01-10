import React from 'react'
//import walletData from '../../assets/data.js'

const Collectors = ({setAddress, walletData}) => {
    let sortedWallets = walletData.sort((a,b) => a.name > b.name ? 1 : -1);
    return (
            
                <select onChange={e => setAddress(e.target.value)}className="select select-bordered w-full max-w-xs">
                    <option disabled="disabled" selected="selected">Select A Collector</option> 
                    {sortedWallets.map((wallet, i) => {
                        return(
                            <option key={i} value={wallet.address}>{wallet.name}</option>
                        )
                    })}
                </select>

    )
}

export default Collectors
