function set(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function get<T = any>(key: string): T | undefined {
    const value = window.localStorage.getItem(key);
    if (!value) return undefined;

    return JSON.parse(value);
}

function remove(key: string): void {
    window.localStorage.removeItem(key);
}

export const localStorage = { set, get, remove };
