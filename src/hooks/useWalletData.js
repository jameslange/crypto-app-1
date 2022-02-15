import { useState } from "react";

export default function useWalletData(initialValue) {
  const [walletData, setWalletData] = useState(initialValue);

  return [walletData, setWalletData];
}
