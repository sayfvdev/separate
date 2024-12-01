export function Header(item) {
    const head = document.createElement('div')
    const nav_menu = document.createElement('nav')
    const main = document.createElement('a')
    const wallets = document.createElement('a')
    const tranzactions = document.createElement('a')
    const user_data = document.createElement('div')
    const h2 = document.createElement('h2')
    const icon = document.createElement('a')
    const img = document.createElement('img')
    
    const register_link = document.createElement('a')
    
head.classList.add("head")
nav_menu.classList.add("nav_menu")
user_data.classList.add("user_data")

main.href = ""
wallets.href = ""
tranzactions.href = ""
icon.href = ""
register_link.href = "pages/signup/idnex.html"

img.src = "../public/icons/log-out (1) 1.png"


main.innerText = "Главная"
wallets.innerText = "Мои кошельки"
tranzactions.innerText = "Мои транзакции"
h2.innerText = item.email

register_link.innerText = "register"

head.append(nav_menu,user_data,)
nav_menu.append(main,wallets,tranzactions,register_link)
user_data.append(h2,icon)
icon.append(img)

return head
}