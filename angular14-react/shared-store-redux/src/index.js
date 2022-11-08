import { updateUser } from './store';
import { storeUser } from './store';

console.log('hdgsjflkekf');


const addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function () { updateUser('admin', 'admin@eml.com') } )

