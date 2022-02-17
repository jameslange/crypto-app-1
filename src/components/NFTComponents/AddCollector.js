import React, { useState } from "react";

const AddCollector = ({ walletData, setWalletData }) => {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");

  return (
    <div className="form-control w-3/6 flex flex-col items-center ">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered"
      />
      <label className="label">
        <span className="label-text">Wallet</span>
      </label>
      <input
        type="text"
        placeholder="Public Key"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        className="input input-bordered"
      />
      <button
        onClick={() => {
          setWalletData([...walletData, { name: name, wallet: wallet }]);
          setName("");
          setWallet("");
        }}
        className="btn btn-outline my-10 bg-sky-400 md:w-2/6"
      >
        Add Wallet
      </button>
    </div>
  );
};

export default AddCollector;
