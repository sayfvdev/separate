import  Card  from './component/Card.js';
import { Header } from './component/Header.js';
import  Transactions  from './component/Transactions.js';

Card();
Transactions();

import { users } from "./utils/db.js"
import reload from "./utils/reload.js"

const place = document.querySelector('.container')
reload(users,Header,place)

function custom() {}