
import reload from '../../utils/reload.js'; 
import Сard from '../../component/Card.js';


const cardContainer = document.getElementById('cardContainer');
async function fetchData() {
    try {
        const response = await fetch('../../db.json');
        const data = await response.json();

        
        reload(data, Сard, cardContainer);
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

fetchData();