import { Header } from './components/Header';
import { Card } from './components/Card';
import { Transaction } from './components/Transactions';

import { BASE_URL, CallApi } from './utils/apiHandler';
import reload from './utils/reload';


const body = document.body
const user_fullname = document.querySelector('#user_fullname')
const cardContainer = document.querySelector('#cardContainer')
const tbody = document.querySelector('tbody')

const apiCall = new CallApi(BASE_URL)
const localed = JSON.parse(localStorage.getItem('user'))
user_fullname.innerHTML = `${localed.name} ${localed.surname}`


body.prepend(Header({email: localed.email}))
const [wallets, transaction] = await Promise.all([apiCall.getData('/wallets?user_id=' + localed.id), apiCall.getData('/transactions?user_id=' + localed.id)])


reload(wallets.data, Card, cardContainer)
reload(transaction.data, Transaction, tbody)
