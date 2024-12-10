import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Transaction } from "../../components/Transactions"
import { BASE_URL, CallApi } from "../../utils/apiHandler"
import reload from "../../utils/reload"

const body = document.body
const cardContainer = document.querySelector('#cardContainer')

const apiCall = new CallApi(BASE_URL)
const localed = JSON.parse(localStorage.getItem('user'))

body.prepend(Header({ email: localed.email }))

const wallets = await apiCall.getData('/wallets?user_id=' + localed.id)


reload(wallets.data, Card, cardContainer)
