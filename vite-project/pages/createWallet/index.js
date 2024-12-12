import { OptionComponent } from "../../components/Option";
import { CallApi } from "../../utils/apiHandler"

const form = document.forms.namedItem('signin')
const select = form.querySelector('#currency')

const api_call = new CallApi(import.meta.env.VITE_PUBLIC_CURRENCY_API, import.meta.env.VITE_PUBLIC_CURRENCY_API_KEY)
const base_api_call = new CallApi(import.meta.env.VITE_PUBLIC_BASE_URL)
const currencies = await api_call.getData('/list')
const userData = JSON.parse(localStorage.getItem('user'))

for(let key in currencies.data.currencies) {
    select.append(OptionComponent(`${key}: ${currencies.data.currencies[key]}`, key))
}

form.onsubmit = async (e) => {
    e.preventDefault()

    const fm = new FormData(e.target)

    const wallet = {
        id: crypto.randomUUID(),
        user_id: userData.id,
        name: fm.get("name"),
        currency: fm.get("currency"),
        total: fm.get("total"),   
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
    }

    const res = await base_api_call.postData("/wallets", wallet)

    if(res.status === 201) {
        form.reset()
        location.assign('/pages/wallets/')
        return
    }
    alert('Something went wrong!')
}
