const form = document.forms.namedItem('register')


form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

}

