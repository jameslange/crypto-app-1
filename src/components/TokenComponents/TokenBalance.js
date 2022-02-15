import React from "react";
import "../style.css";

const TokenBalance = ({ nativeBalance, tokenData }) => {
  return (
    <div className="overflow-x-auto container mx-auto py-10 shadow-2xl  ">
      <table className="table w-full table-compact object-center border-collapse ">
        <thead className={!nativeBalance.balance && "hidden"}>
          <tr>
            <th className="balanceGradient"></th>
            <th className="border balanceGradient">Coin</th>
            <th className="border balanceGradient">Symbol</th>
            <th className="border balanceGradient">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr className={!nativeBalance.balance && "hidden"}>
            <td className="border balanceGradient">1</td>
            <td className="border balanceGradient">Ethereum</td>
            <td className="border balanceGradient">ETH</td>
            <td className="border balanceGradient">{(nativeBalance.balance / 1000000000000000000).toFixed(2)}</td>
          </tr>
          {tokenData &&
            tokenData
              .filter((item) => item.name !== null)
              .map((token, i) => {
                return (
                  <tr className="hover" key={i}>
                    <td className="border balanceGradient">{i + 2}</td>
                    <td className="border balanceGradient">{token.symbol}</td>
                    <td className="border balanceGradient">{token.name}</td>
                    <td className="border balanceGradient">{(token.balance / 10 ** token.decimals).toFixed(2)}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default TokenBalance;
