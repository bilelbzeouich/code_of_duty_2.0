const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function init() {
  const address = "0x2E28222CeAaC0Ed6e2bb4BA852f5c72ed817cE33";

  await helpers.setBalance(address, 1000 * 1e18);
}

init()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });