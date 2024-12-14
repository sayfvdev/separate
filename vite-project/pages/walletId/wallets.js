
import { CardInfo } from "../../components/CardInfo"
import { Header } from "../../components/Header"
import { OptionComponent } from "../../components/Option"
import { Transaction } from "../../components/Transactions"
import { BASE_URL, CallApi } from "../../utils/apiHandler"
import reload from "../../utils/reload"

const body = document.body
const tbody = document.querySelector('tbody')
const localed = JSON.parse(localStorage.getItem('user'))
const apiCall = new CallApi(BASE_URL)

const api_call = new CallApi(import.meta.env.VITE_PUBLIC_CURRENCY_API, import.meta.env.VITE_PUBLIC_CURRENCY_API_KEY)
const currencies = await api_call.getData('/list')

const place = document.querySelector(".payment-cards")
const select = document.querySelector('#currency')

for(let key in currencies.data.currencies) {
    select.append(OptionComponent(`${key}: ${currencies.data.currencies[key]}`, key))
}







const wallets = await apiCall.getData('/wallets?user_id=' + localed.id)
console.log(wallets.data);


// Значение в селекторах и инпуте
if (wallets.data && wallets.data.length > 0) {
    const mainSel = document.querySelector('.main_sel'); 
    const currency_inp = document.querySelector('.currency_inp'); 

    
   
    wallets.data.forEach(wallet => {
        const option = document.createElement('option');
        option.value = wallet.currency;
        option.textContent = wallet.currency;
        mainSel.append(option);
        currency_inp.value = wallet.total
    });

   
    mainSel.value = wallets.data[0].currency;
}

body.prepend(Header({email: localed.email}))
reload(wallets.data, CardInfo, place)


