import  Card  from './component/Card.js';
import { Header } from './component/Header.js';
import  Transactions  from './component/Transactions.js';


Transactions();

import { users } from "./utils/db.js"
import { wallets } from "./utils/db.js";
import reload from "./utils/reload.js"

const place = document.querySelector('.container')
const cardContainer = document.querySelector('#cardContainer')
reload(users,Header,place)
reload(wallets,Card, cardContainer)
function custom() {}