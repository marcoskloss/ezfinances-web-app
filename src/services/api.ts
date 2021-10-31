import axios from 'axios';
import { localStorage } from './localStorage';

export const TOKEN_STORAGE_KEY = '@ezfinances:acess-token';

const token = localStorage.get(TOKEN_STORAGE_KEY);

export const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
    },
});

export function setDefaultAuthorizationHeader(token: string | null): void {
    (api.defaults.headers as any).Authorization = `Bearer ${token}`;
}
