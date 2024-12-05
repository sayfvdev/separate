import { BASE_URL, CallApi } from './utils/apiHandler';
const apiCall = new CallApi(BASE_URL)

const body = document.body
const cardContainer = document.querySelector('#cardContainer')

body.prepend(Header({email: "example@gmail.com"}))

// reload(wallets, Card, cardContainer)
// reload(wallets, Transactions, cardContainer)

const users = await apiCall.getData("/users")

console.log(apiCall);
