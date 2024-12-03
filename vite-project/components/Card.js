export default function Сard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = "Visa";

    const cardCurrency = document.createElement("p");
    cardCurrency.textContent = "RUB";

    card.append(cardTitle);
    card.append(cardCurrency);

    return card
}
