const form = document.forms.namedItem('signin')

form.onsubmit = async (e) => {
    e.preventDefault();

    const user = {};

    const fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

}
