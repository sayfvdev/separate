import { BASE_URL, CallApi } from "../../utils/apiHandler";

const form = document.forms.namedItem('register')
const api_call = new CallApi(BASE_URL)

form.onsubmit = async (e) => {

    e.preventDefault();

    const user = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form);

    fm.forEach((value, key) => {

        user[key] = value;
    });
    await api_call.postData("/users", user)

}


