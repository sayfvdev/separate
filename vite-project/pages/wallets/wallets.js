import reload from '../../utils/reload.js';
import Сard from '../../component/Card.js';

const cardContainer = document.getElementById('cardContainer');

async function fetchData() {
    try {
        const response = await fetch('../../db.json');
        const data = await response.json();

        if (Array.isArray(data.wallets)) {
            reload(data.wallets, Сard, cardContainer);
        } else {
            console.error('Свойство wallets отсутствует или не является массивом:', data.wallets);
        }
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

fetchData();
