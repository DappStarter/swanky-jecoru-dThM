require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name release night hospital include praise army gasp'; 
let testAccounts = [
"0x0463799cf52a467e17ff5351cab7a5fb8c41a6023e48612ac4f4f601935c1b91",
"0xde8f9d512989ec03e178b36b0f72a90330d578116f8ffaa0f9d879e730cbee68",
"0x3ac4ec26d29afa898f8a8ffd902308e86205d0df47f666526b11eb34c375f1f9",
"0xdeb0bc0fb3463baa3aa3ec76b1cbbdc0349286e9c88c6d275c30db3fbad1ab8e",
"0x01267aee0441337cd34a7f4d3189a66358099dec3bd8107f0b66057aeb4d8c10",
"0xb3ceba28376de8cc46b47eb76d273d4ddc98d8f5fb167e908e27252c5fb49d74",
"0xee22a9372fed8315899be286c992ae6a4a85a1512c4e7726c6a4842e79b2fc67",
"0x72cdce0e1235552235942fb24aa14eaab515b73ba7b80f82efa1925639ffb9ce",
"0x41f7e238d6333477e467a1cca49c2b694355faed86edcd2b1b7b91906ef81b3f",
"0x0f414fe58c52ab77bf8d26b2ef3a4cea116476bfdda3735d7a21d1adfbc0149d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

