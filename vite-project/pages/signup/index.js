import { BASE_URL, CallApi } from "../../utils/apiHandler";

const form = document.forms.namedItem('register');
const api_call = new CallApi(BASE_URL);

form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {
        id: crypto.randomUUID()
    };

    const fm = new FormData(form);
    fm.forEach((value, key) => user[key] = value);
   
    const { data } = await api_call.getData(`/users?email=${user.email}`);

    if (data.length > 0) {
        alert("Такой email уже существует!");
    } else {
        await api_call.postData("/users", user);
        alert("Регистрация успешна!");
        location.assign('/pages/signin/')
    }
};
