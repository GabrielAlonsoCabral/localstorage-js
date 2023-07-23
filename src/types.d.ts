export interface IStore {
    value: string;
    ttl: number;
    createdAt: number;
}

export interface ILocalStorage {
    get(key: string): string | null
    set(key: string, value: string, ttl: number): boolean
    delete(key: string): void;
    has(key: string): boolean;
    push(key: string, value: string): boolean
}