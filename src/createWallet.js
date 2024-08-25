// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definindo a rede (testnet)
const network = bitcoin.networks.testnet;

// Definindo o caminho de derivação para a carteira HD
const path = `m/44'/1'/0'/0/0`;

// Gerando a semente (seed) a partir de um mnemonic
const mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
const root = bip32.fromSeed(seed, network);

// Derivando a conta, par de chaves privada e pública
const account = root.derivePath(path);
const node = account.derive(0).derive(0);

// Gerando o endereço Bitcoin e a chave privada correspondente
const btcAddress = bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;
const privateKey = node.toWIF();

// Exibindo as informações geradas
console.log("Carteira gerada:");
console.log("Endereço Bitcoin: ", btcAddress);
console.log("Chave privada: ", privateKey);
console.log("Seed (mnemonic): ", mnemonic);