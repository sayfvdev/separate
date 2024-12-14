import { CardInfo } from "../../components/CardInfo"
import { Header } from "../../components/Header"
import { OptionComponent } from "../../components/Option"
import { Transaction } from "../../components/Transactions"
import { BASE_URL, CallApi } from "../../utils/apiHandler"
import reload from "../../utils/reload"
import Chart from 'chart.js/auto';

const page_id = location.search.split('=').at(-1)

const body = document.body
const tbody = document.querySelector('tbody')
const localed = JSON.parse(localStorage.getItem('user'))
const apiCall = new CallApi(BASE_URL)
const ctx = document.querySelector('#myChart')

// const api_call = new CallApi(import.meta.env.VITE_PUBLIC_CURRENCY_API, import.meta.env.VITE_PUBLIC_CURRENCY_API_KEY)
// const currencies = await api_call.getData('/list')
const wallet = await apiCall.getData('/wallets/' + page_id)
const transactions = await apiCall.getData('/transactions?walletId=' + page_id)
console.log(transactions);



const place = document.querySelector(".payment-cards")
const select = document.querySelector('#currency')

// for (let key in currencies.data.currencies) {
//     select.append(OptionComponent(`${key}: ${currencies.data.currencies[key]}`, key))
// }

const wallets = await apiCall.getData('/wallets?user_id=' + localed.id)
if(wallets.status == 200 || wallets.status == 201) {
    CreateLineChart()
}
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

body.prepend(Header({ email: localed.email }))
reload(wallets.data, CardInfo, place)



function CreateLineChart() {
    // 
    
    // 
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Samir', 'Islom', 'Jasur'],
            datasets: [{
                label: '# of Votes',
                data: [4, 10, 9],
                borderWidth: 1,
                backgroundColor: ['skyblue', 'green', 'yellow'],
                borderColor: ['purple', 'red', 'black']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },

        }
    });
}