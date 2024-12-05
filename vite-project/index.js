import Card from './components/Card';
import { Header } from './components/Header';
import Transactions from './components/Transactions';
import reload from "./utils/reload"


const body = document.body
const cardContainer = document.querySelector('#cardContainer')

body.prepend(Header({email: "example@gmail.com"}))

reload(wallets, Card, cardContainer)
// reload(wallets, Transactions, cardContainer)
