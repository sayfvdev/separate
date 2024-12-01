export default function Сard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card_h2")
    cardTitle.textContent = "islom";
    
    const cardCurrency = document.createElement("p");
    cardCurrency.classList.add("card_p")
    cardCurrency.textContent = "jasur";

    card.append(cardTitle);
    card.append(cardCurrency);

    return card;
}
