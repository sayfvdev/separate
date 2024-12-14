export function Card(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card_h2")
    cardTitle.textContent = item.name;
     
    const cardCurrency = document.createElement("p");
    cardCurrency.classList.add("card_p")
    cardCurrency.textContent = item.currency;

    card.onclick = (e) =>{
        location.assign("/pages/walletId/")
    }

    card.append(cardTitle);
    card.append(cardCurrency);

    return card;
}