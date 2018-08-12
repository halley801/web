import { User } from './types'

export function loadedReducer(state = false, action): boolean {
    if (action.type === 'LOADED') return true;
    return state;
}

export function userReducer(state: User[] = [], action): User[] {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'CREATE_USER') return [action.user, ...state];
    if (action.type === 'LOG_OUT') return null;
    return state;
}