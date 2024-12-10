export function Transaction(item) {
    const tr = document.createElement("tr")
    const tb_id = document.createElement("th")
    const tb_wallet = document.createElement("th")
    const tb_categories = document.createElement("th")
    const tb_sum = document.createElement("th")
    const tb_when = document.createElement("th")

    tb_id.innerText = item.id
    tb_wallet.innerText = item.wallet
    tb_categories.innerText = item.category
    tb_sum.innerText = item.total
    tb_when.innerText = item.time

    tr.append(tb_id, tb_wallet, tb_categories, tb_sum, tb_when)

    return tr
}