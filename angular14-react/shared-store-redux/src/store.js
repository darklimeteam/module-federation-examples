
import { configureStore } from '@reduxjs/toolkit';

const UPDATE_CURRENT_USER = '[user] Update current user';

// Dispatch binding functions
const bindUpdateCurrentUser = (name, email) => storeUser.dispatch(updateCurrentUser(name, email));


export function updateUser(name, email) {
    console.log('name, email', name, email);
    bindUpdateCurrentUser(name, email);
}

// Increase total todo count
function updateCurrentUser(name, email){
    return {
        type: UPDATE_CURRENT_USER,
        payload: {name, email}
    }
}

const storeUser = configureStore({ reducer: reducer_current_user_update });

export const SOME_VALUE = 'value from store';
   
console.log(storeUser.getState());

const UnSubscribe = storeUser.subscribe(()=>{
    console.log(storeUser.getState());
    //renderTodoList(store.getState().totalItems);
    //renderPendingElements(store.getState().pendingList);
    //renderCompleteElements(store.getState().completedList);
})

function reducer_current_user_update(state = {name: null, email: null}, action){
    switch(action.type){
        case UPDATE_CURRENT_USER:
            return {...state, name: action.payload.name, email: action.payload.email};
        default:
            return state;
    }
}

export default storeUser;