import { Header } from "../../components/Header"
import { Transaction } from "../../components/Transactions"
import { BASE_URL, CallApi } from "../../utils/apiHandler"
import reload from "../../utils/reload"

const body = document.body
const tbody = document.querySelector('tbody')
const localed = JSON.parse(localStorage.getItem('user'))
const apiCall = new CallApi(BASE_URL)

body.prepend(Header({email: localed.email}))

const transaction = await apiCall.getData('/transactions?user_id=' + localed.id)

reload(transaction.data, Transaction, tbody)