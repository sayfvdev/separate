import { OptionComponent } from "../../components/Option"
import { CallApi } from "../../utils/apiHandler"

const form = document.forms.namedItem('create')

const localed = JSON.parse(localStorage.getItem('user'))
const api_call = new CallApi(import.meta.env.VITE_PUBLIC_BASE_URL)
const wallets = await api_call.getData('/wallets?user_id=' + localed.id)

for(let wallet of wallets.data) {
    select.append(OptionComponent(`${wallet.name} - ${wallet.currency}: ${wallet.total}`, wallet.id))
}


form.onsubmit = async (e) => {
    e.preventDefault()

    const fm = new FormData(e.target)
    const newTransaction = {
        id: crypto.randomUUID(),
        user_id: localed.id,
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
    }

    fm.forEach((val, key) => newTransaction[key] = val)

    const wallet = wallets.data.find((w) => w.id === newTransaction.walletId)

    if(!wallet) return // error handler
    if(wallet.total < newTransaction.total) return // error handler 

    delete wallet.id 
    delete wallet.user_id
    newTransaction.wallet = wallet
    
    await api_call.patchData('/wallets/' + newTransaction.walletId, {
        total: wallet.total - newTransaction.total
    })

    await api_call.postData('/transactions', newTransaction)

    location.assign('/pages/transactions/')
}