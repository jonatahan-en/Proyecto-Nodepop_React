type StoreKey = "auth";

const storage = {
    get(key: StoreKey) {
        const value = localStorage.getItem(key);
        if (!value) {
            return null;
        }
        return value;
    },
    set(key: StoreKey, value: string) {
        localStorage.setItem(key,value)
    },
    remove(key: StoreKey) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    },
};

export default storage;