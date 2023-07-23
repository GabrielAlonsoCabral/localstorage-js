import dayjs = require("dayjs");
import { ILocalStorage, IStore } from "./types";

export class LocalStorage implements ILocalStorage {
    private store = new Map<string, IStore>();

    /**
     * Storage key value on LocalStorage.  
     * @param {string} key - identifier key.
     * @param {string} value - store value.
     * @param {ttl} ttl - expiration date in seconds.
     * @returns {boolean} - true otherwise throw error.
     */
    set(key: string, value: string, ttl: number): boolean {
        this.store.set(key, { value, ttl, createdAt: dayjs().unix() });
        return true;
    }


    /**
     * Delete key on LocalStorage.  
     * @param {string} key - identifier key.
     * @returns {void} - there is no return.
    */
    delete(key: string): void {
        this.store.delete(key);
    }

    /**
     * Verify key exist on LocalStorage.  
     * @param {string} key - identifier key.
     * @returns {boolean} - returns boolean to verify key already exist.
    */
    has(key: string): boolean {
        return this.store.has(key)
    }

    /**
     * Return localStorage value based on key.  
     * @param {string} key - identifier key.
     * @returns {string|null} - Return key value not expirated.
    */
    get(key: string): string | null {
        const storeValue = this.store.get(key);
        if (!storeValue) return null;

        const expirationEpochTime = storeValue.createdAt + storeValue.ttl;
        const currentEpochTime = dayjs().unix();

        if (currentEpochTime < expirationEpochTime) return storeValue.value;

        return null;
    }

    private getTTL(key: string) {
        const storeValue = this.store.get(key);
        if (!storeValue) return null;

        return storeValue.ttl;
    }

    /**
     * Append new item o localStorage key case value is array.  
     * @param {string} key - identifier key.
     * @param {string} value - store value.
     * @returns {boolean} - success return is true otherwise false.
    */
    push(key: string, value: string): boolean {
        const storeValue = this.get(key);
        if (!storeValue) return false;

        const parsedStoreValue = JSON.parse(storeValue);

        if (Array.isArray(parsedStoreValue)) {
            parsedStoreValue.push(value);
            this.set(key, JSON.stringify(parsedStoreValue), this.getTTL(key) || 60);
            return true;
        }

        return false;
    }
}