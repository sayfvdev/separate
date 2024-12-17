export function CardInfo(item, onCardSelect) {
    const page_id = location.search.split('=').at(-1);
    const card = document.createElement('div');
    const icon = document.createElement('i');
    const card_details = document.createElement('div');
    const card_title = document.createElement('p');
    const card_expiry = document.createElement('p');

    card.classList.add("card");

    icon.innerHTML = "&#128179";
    icon.classList.add("icon");

    card_details.classList.add("card-details");

    card_title.classList.add("card-title");
    card_expiry.classList.add("card-expiry");

    if (page_id === item.id) {
        card.classList.add('selected');
    }

    card_title.innerText = item.name;
    card_expiry.innerText = item.currency;

    card.append(icon, card_details);
    card_details.append(card_title, card_expiry);

    
    card.onclick = () => {
        document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
        card.classList.add('selected'); 
        onCardSelect(item); 
    };

    return card;
}
