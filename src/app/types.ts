export interface User {
    _id: string;
    name: string;
    email: string;
    
}
export interface AppState {
    loaded: boolean;
    user: User;
}
export interface Message {
    type: string;
    text: string;
    date: number;
}
