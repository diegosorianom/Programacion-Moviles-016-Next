"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDAOImpl = void 0;
class GenericDAOImpl {
    constructor() {
        this.items = [];
    }
    async obtenerTodos() {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.items), 1000);
        });
    }
    async obtenerPorId(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                const item = this.items.find(item => item.id === id) || null;
                resolve(item);
            }, 1000);
        });
    }
    async crear(item) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.items.push(item);
                resolve(item);
            }, 1000);
        });
    }
    async actualizar(item) {
        return new Promise(resolve => {
            setTimeout(() => {
                const index = this.items.findIndex(i => i.id === item.id);
                if (index !== -1) {
                    this.items[index] = item;
                }
                resolve(item);
            }, 1000);
        });
    }
    async eliminar(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.items = this.items.filter(item => item.id !== id);
                resolve();
            }, 1000);
        });
    }
}
exports.GenericDAOImpl = GenericDAOImpl;
//# sourceMappingURL=dao.impl.js.map