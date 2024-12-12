// Импортируем необходимые компоненты и API обработчики
import { Transaction } from "../../components/Transaction";
import { CallApi } from "../../utils/apiHandler";
import reload from "../../utils/reload";

const form = document.forms.namedItem('createTransaction');
const base_api_call = new CallApi(import.meta.env.VITE_PUBLIC_BASE_URL);
const userData = JSON.parse(localStorage.getItem('user'));

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target);
    const fromWallet = fm.get("fromWallet");
    const moneyAmount = parseFloat(fm.get("moneyAmount"));
    const category = fm.get("type");

    if (!fromWallet || isNaN(moneyAmount) || !category) {
        alert('Пожалуйста, заполните все поля корректно!');
        return;
    }

   
    const wallets = await base_api_call.getData(`/wallets?user_id=${userData.id}`);
    const wallet = wallets.data.find(w => w.name === fromWallet);

    if (!wallet) {
        alert('Указанный кошелек не найден!');
        return;
    }

    if (wallet.total < moneyAmount) {
        alert('Недостаточно средств на кошельке!');
        return;
    }

   
    wallet.total -= moneyAmount;
    await base_api_call.putData(`/wallets/${wallet.id}`, wallet);

    
    const transaction = {
        id: crypto.randomUUID(),
        wallet: wallet.name,
        category,
        total: moneyAmount,
        time: new Date().toLocaleString(),
        user_id: userData.id
    };

    const res = await base_api_call.postData("/transactions", transaction);

    if (res.status === 201) {
        form.reset();
        
        // Перезагружаем страницу транзакций
        const tbody = document.querySelector('tbody');
        const transactions = await base_api_call.getData(`/transactions?user_id=${userData.id}`);
        reload(transactions.data, Transaction, tbody);
        location.assign('/pages/transactions/');
        return;
    }

    alert('Что-то пошло не так!');
};
