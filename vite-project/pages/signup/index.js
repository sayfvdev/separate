




const form = document.forms.namedItem('register')


form.onsubmit = async (e) => {
    e.preventDefault()

    const user = {
        id: crypto.randomUUID(),
        email: new FormData(e.target).get("email"),
        name: new FormData(e.target).get("name"),
        surname: new FormData(e.target).get("surname"),
        password: new FormData(e.target).get("password")

    }


    
console.log(user);



}




 
 
 








