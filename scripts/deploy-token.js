import sdk from "./initialize-sdk.js"

const app = sdk.getAppModule("APP_ADDRESS");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "NAME",
            symbol: "SYMBOL"
        });
        console.log("Successfully deployed!!! address: ", tokenModule.address);
    } catch (error) {
        console.error("failed to deploy", error)
    }
})()

