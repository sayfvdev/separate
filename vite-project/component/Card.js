export default function Сard(item) {
    const container = document.createElement("div");
    const welcome = document.createElement("h1");
    const myGmail = document.createElement("a");
    const myWallet = document.createElement("h2");
    const cards = document.createElement("div");
    const viewAll = document.createElement("a");
    
    
    container.classList.add("container");
    welcome.classList.add("welcome");
    myGmail.classList.add("my_gmail");
    myWallet.classList.add("my_wallet");
    cards.classList.add("cards");
    viewAll.classList.add("view-all");
    
    welcome.textContent = "Добро пожаловать, Alex Adams!";
    myGmail.textContent = "alexadams@google.com";
    myGmail.href = "mailto:alexadams@google.com";
    myWallet.textContent = "Мои кошельки";
    viewAll.textContent = "Смотреть все кошельки";
    viewAll.href = "#";
    
    container.append(welcome);
    container.append(myGmail);
    container.append(myWallet);
    container.append(cards);
    container.append(viewAll);

    for (let i = 0; i < 4; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = "Visa";

        const cardCurrency = document.createElement("p");
        cardCurrency.textContent = "RUB";

        card.append(cardTitle);
        card.append(cardCurrency);
        cards.append(card);
    }


    document.body.append(container);
}
