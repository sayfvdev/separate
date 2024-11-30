export default function Transactions(item) {
    const container = document.createElement("div");
    const form = document.createElement("form");
    const tableContainer = document.createElement("div");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const footerLink = document.createElement("a");

    container.classList.add("transaction-container");
    form.name = "create";
    tableContainer.classList.add("table-container");
    footerLink.classList.add("footer-link");

    const formTitle = document.createElement("h1");
    formTitle.textContent = "Добавить транзакцию";
    form.append(formTitle);

    const inputFields = [
        { name: "wallet", placeholder: "Из кошелька" },
        { name: "sum", placeholder: "Сумма" },
        { name: "category", placeholder: "Категория" },
    ];

    inputFields.forEach((field) => {
        const input = document.createElement("input");
        input.classList.add("inp");
        input.type = "text";
        input.name = field.name;
        input.placeholder = field.placeholder;
        form.append(input);
    });

    container.append(form);

    const tableTitle = document.createElement("h2");
    tableTitle.classList.add("table_h2");
    tableTitle.textContent = "Последние транзакции";
    tableContainer.append(tableTitle);

    const headerRow = document.createElement("tr");
    const headers = ["ID", "Отправлено с кошелька", "Категория", "Сумма транзакции", "Когда"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.append(th);
    });
    thead.append(headerRow);
    table.append(thead);

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < headers.length; j++) {
            const td = document.createElement("td");
            row.append(td);
        }
        tbody.append(row);
    }
    table.append(tbody);

    tableContainer.append(table);
    footerLink.href = "#";
    footerLink.textContent = "Смотреть все оплаты";
    tableContainer.append(footerLink);

    container.append(tableContainer);

    document.body.append(container);
}
