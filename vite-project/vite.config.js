import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signin: resolve(__dirname, 'pages/signin/index.html'),
        signup: resolve(__dirname, 'pages/signup/index.html'),
        wallets: resolve(__dirname, 'pages/wallets/index.html'),
        walletId: resolve(__dirname, 'pages/walletId/index.html'),
        transaction: resolve(__dirname, 'pages/transaction/index.html'),
        createWallet: resolve(__dirname, 'pages/createWallet/index.html'),
        createTransaction: resolve(__dirname, 'pages/createTransaction/index.html'),
      },
    },
  },
})