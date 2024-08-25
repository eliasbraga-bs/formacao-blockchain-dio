# Formação Blockchain Dio
Binance - Blockchain Developer with Solidity


# Geração de Carteira HD em Bitcoin

Este script em JavaScript tem como objetivo gerar uma carteira determinística hierárquica (HD) para a rede de teste do Bitcoin (testnet). A carteira HD é uma forma segura de gerar múltiplos endereços a partir de uma única semente (seed) mnemônica.

## Passos para Geração da Carteira HD

1. **Importando as dependências:**
   - O script utiliza as bibliotecas `bip32`, `bip39` e `bitcoinjs-lib` para operações relacionadas à carteira HD e transações Bitcoin.

2. **Definindo a Rede e o Caminho de Derivação:**
   - A rede utilizada é a testnet do Bitcoin.
   - O caminho de derivação (`path`) define a estrutura da carteira HD.

3. **Geração da Semente (Seed) e Raiz da Carteira HD:**
   - Uma semente mnemônica é gerada aleatoriamente.
   - A semente é convertida em uma sequência de bytes para criar a raiz da carteira HD.

4. **Criação da Conta e Par de Chaves:**
   - A partir da raiz, uma conta e um par de chaves privada e pública são derivados.

5. **Geração do Endereço Bitcoin e Chave Privada:**
   - O endereço Bitcoin e a chave privada correspondente são gerados a partir da chave pública.

6. **Exibição das Informações Geradas:**
   - O script exibe o endereço Bitcoin, a chave privada, a semente mnemônica e uma mensagem indicando que a carteira foi gerada com sucesso.

## Execução do Script

Para executar o script e gerar uma carteira HD, basta rodar o código em um ambiente Node.js. Certifique-se de ter as dependências instaladas previamente.

```bash
node createWallet.js
```

Após a execução, as informações da carteira gerada serão exibidas no console.