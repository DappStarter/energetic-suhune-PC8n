require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purpose install dry fortune sleep'; 
let testAccounts = [
"0xf5bfb8d57e3680a11478b0a7c1ef794ce736d8167b4a6f7ea15f18f1553aecd6",
"0xea7454f2ef21fc38310472e44aeedd28bfe81302b0c51d593f373537e12eb67e",
"0x7336568fc5b42968194b0acd3a6719008558f625cbe335c78513910f1bfc485b",
"0xa273618d9e7d583e58651fd1e80cc0bec99996738bf6701061359a2a570b0ae3",
"0x0402a824442dac98ee8713750fd07334726bfc00c285823705f02e18d934b7fb",
"0x38897d97a79178e5f0406f0919f07f83fed4a33e8509d2d4e865c6476c82a83e",
"0x30055f0926acdc08672d9427bbad59e8a460956073f7c89d4e9a4e79b8cc77ff",
"0x3c796b49e7ce9af1e9a2c60838d773522b9bd8fe2a1b41baa5f8b4a372ff31ef",
"0x9457f8b9bc0223e5c3c557679be2ab8a7766aa1c7091f92bb8f1012af2171685",
"0x5f0561eb9316af1092cc1e23a4229b198fb792aeae5b39a4e6fd010a05243e57"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

