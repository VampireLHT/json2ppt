class Store {
    constructor(){}

    static getInstance() {
        if (!this.instance) {
            this.instance = new Store();
        }
        return this.instance;
    }

    setProperty(key, val) {
        this[key] = val
    }

    getProperty(key) {
        return this[key]
    }
}

export default Store;