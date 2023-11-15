const axios = require('axios');
const { ethers } = require('ethers');

const address = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599';
const apiKey = '38NRK2BB27QJ5FN5NYUCY1KP68QR6EFYWZ';
const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`
const infuraUrl = `https://mainnet.infura.io/v3/5e7279806adc44ceac87059cf3bbfd32`

const getAbi = async () => {
    const res = await axios.get(url);
    const abi = JSON.parse(res.data.result);
    //console.log(abi);

    const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
    const contract = new ethers.Contract(
        address,
        abi,
        provider
    )

    const name = await contract.name();
    const totalSupply = await contract.totalSupply();

    console.log(name);
    console.log(totalSupply.toString());

}

getAbi()