import { useNativeBalance, useERC20Balances } from "react-moralis";

const useCryptoBalances = ({ address }) => {
  const {
    getBalances,
    data: balance,
    nativeToken,
  } = useNativeBalance({
    address: address,
  });

  const { fetchERC20Balances, data } = useERC20Balances({
    address: address,
  });

  const tokenData = data;

  return [getBalances, fetchERC20Balances, nativeToken, balance, tokenData];
};

export default useCryptoBalances;
