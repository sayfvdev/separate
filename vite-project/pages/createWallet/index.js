

const form = document.forms.namedItem('signin')


form.onsubmit = async (e) => {
    e.preventDefault()

    const user = {
        id: crypto.randomUUID(),
        money: new FormData(e.target).get("money"),
        name: new FormData(e.target).get("name")
       

    }


    
console.log(user);



}
