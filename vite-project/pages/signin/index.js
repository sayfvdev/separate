import { BASE_URL, CallApi } from "../../utils/apiHandler";

const form = document.forms.namedItem('signin');
const api_call = new CallApi(BASE_URL);

form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {};

    const fm = new FormData(form);
    fm.forEach((value, key) => user[key] = value);

 
    const { data } = await api_call.getData(`/users?email=${user.email}`);

    if (data.length === 0) {
        alert("Пользователь с таким email не найден!");
    } else if (data[0].password !== user.password) {
        alert("Неверный пароль!");
    } else {
        alert("Вход успешен!");
        window.location.href = "/main.html"; 
    }
};
