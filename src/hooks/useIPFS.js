export const useIPFS = () => {
    const resolveLink = (url) => {
      //if(!url.startsWith('data') && !url.includes('//')) return "https://gateway.ipfs.io/ipfs/" + url;
     // if(!url.includes(':'))return "https://gateway.ipfs.io/ipfs/" + url;
      if (!url || !url.includes("ipfs://")) return url;
      //everything with no https:// getting filtered by this ^^
      return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
    };
  
    return { resolveLink };
  };