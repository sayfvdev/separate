import { redirect } from "../../utils/redirect";

const form = document.forms.namedItem('register')

localStorage.removeItem('accessToken');

form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

    const base64Hash = btoa(JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name
    }));

    user.password = btoa(user.password);

    fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(user)
    })
        .then((res) => {
            if (res.status === 201) {
                localStorage.setItem('accessToken', base64Hash);
                redirect('/');
            }
        })
}

