import React,{useState, useEffect, useRef} from 'react'
import AddCollector from './AddCollector';
import Collectors from './Collectors';
import { useNFTBalances, useMoralis } from "react-moralis";

import initialWallets from '../../assets/data'
import PaginatedItems from './PaginatedItems';
import useWalletData from '../../hooks/useWalletData';



const NftsFromWallet = () => {
    const { getNFTBalances, data } = useNFTBalances();
    const [nftBalances, setNftBalances] = useState([]);
    const [address, setAddress] = useState("");
    const [pageRequestNum, setPageRequestNum] = useState(500);
    const firstUpdate = useRef(true);
    

    const [walletData, setWalletData] = useWalletData(initialWallets);
    //const [wallets, setWallets] = useState([])
   
  
   

    useEffect(()=>{
        if(firstUpdate.current) {
            firstUpdate.current=false;
            return 
        }

           if((data) && ((data.total > nftBalances.length ))) {
            getNFTBalances({ params: { address: address, offset: pageRequestNum} })
            setNftBalances([...nftBalances, ...data.result]) 
            setPageRequestNum(pageRequestNum+500)
           }
    },[data])



    return (
        <>
            <div className="card shadow m-10 bg-blue-300">
                <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">Search NFTs by Wallet</h2>  
                     <AddCollector  setWalletData={setWalletData} walletData={walletData} />       
                     <Collectors walletData={walletData} setAddress={setAddress}/>       
                     <button className="btn btn-outline my-10 bg-sky-400 max-w-xs w-1/6" onClick={() => {
                         setPageRequestNum(0)
                         setNftBalances([]);
                         getNFTBalances({ params: { address: address } });}
                         }>Refetch NFTBalances</button> 
                 </div> 
            </div>      
               <PaginatedItems nftBalances={nftBalances}  itemsPerPage={20} />      
        </>
    )
}


export default NftsFromWallet;
