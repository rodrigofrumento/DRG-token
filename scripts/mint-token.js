import { ethers } from "ethers"
import sdk from './initialize-sdk.js'

const tokenModule = sdk.getTokenModule('TOKEN_ADDRESS');

(async () => {
    try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log("There now is ", ethers.utils.formatUnits(totalSupply, 18), " $TOKEN in circulation")
} catch (error){
    console.error("Failed to mint tokens ", error);
}})();