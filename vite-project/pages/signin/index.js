import { redirect } from "../../utils/redirect";

const form = document.forms.namedItem('signin')

localStorage.removeItem('accessToken');

function comparePass(hash, pass) {
    const endoced = atob(hash);

    return endoced === pass;
}

form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {};

    const fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

    const res = await fetch(`http://localhost:8080/users?email=${user.email}`);
    const [foundUser] = await res.json();

    if (!foundUser) {
        alert('user is not defined');
        return;
    }

    const isCorrectPass = comparePass(foundUser.password, user.password);

    if (!isCorrectPass) {
        alert('user is not defined');
        return;
    }


    const base64Hash = btoa(JSON.stringify({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name
    }));

    localStorage.setItem('accessToken', base64Hash);
    
    redirect('/');
}
