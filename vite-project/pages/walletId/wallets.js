import { CardInfo } from "../../components/CardInfo";
import { Header } from "../../components/Header";
import { BASE_URL, CallApi } from "../../utils/apiHandler";
import reload from "../../utils/reload";
import Chart from 'chart.js/auto';

const page_id = location.search.split('=').at(-1);

const body = document.body;
const localed = JSON.parse(localStorage.getItem('user'));
const apiCall = new CallApi(BASE_URL);
const ctx = document.querySelector('#myChart').getContext('2d');

const place = document.querySelector(".payment-cards");
const mainSel = document.querySelector('.main_sel');
const currency_inp = document.querySelector('.currency_inp');

async function init() {
    body.prepend(Header({ email: localed.email }));

    const wallets = await apiCall.getData('/wallets?user_id=' + localed.id);
    if (wallets.data && wallets.data.length > 0) {
        
        mainSel.innerHTML = "";
        wallets.data.forEach(wallet => {
            const option = document.createElement('option');
            option.value = wallet.currency;
            option.textContent = wallet.currency;
            mainSel.append(option);
        });
        mainSel.value = wallets.data[0].currency;
        currency_inp.value = wallets.data[0].total;

       
        reload(wallets.data, (item) => CardInfo(item), place);
    }

    await CreateLineChart();
}
init();
async function CreateLineChart(walletId = page_id) {
    const transactions = await apiCall.getData('/transactions?walletId=' + walletId);

    const labels = transactions.data.map(transaction => transaction.created_at);
    const data = transactions.data.map(transaction => +(transaction.total));

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Amount Spent',
                data: data,
                borderWidth: 2,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



