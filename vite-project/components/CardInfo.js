export function CardInfo(item) {
    const card = document.createElement('div')
    const icon = document.createElement('i')
    const card_details = document.createElement('div')
    const card_title = document.createElement('p')
    const card_expiry = document.createElement('p')


    card.classList.add("card")

    icon.innerHTML = "&#128179"
    icon.classList.add("icon")

    card_details.classList.add("card-details")

    card_title.classList.add("card-title")
    card_expiry.classList.add("card-expiry")

    card_title.innerText = item.name
    card_expiry.innerText = item.currency

    card.append(icon,card_details)
    card_details.append(card_title,card_expiry)



    return card





}