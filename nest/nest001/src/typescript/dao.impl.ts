import { GenericDAO } from "./dao";

export class GenericDAOImpl<T extends { id: number }> implements GenericDAO<T> {
    private items: T[] = [];

    async obtenerTodos(): Promise<T[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.items), 1000);
        });
    }

    async obtenerPorId(id: number): Promise<T | null> {
        return new Promise(resolve => {
            setTimeout(() => {
                const item = this.items.find(item => item.id === id) || null;
                resolve(item);
            }, 1000);
        });
    }

    async crear(item: T): Promise<T> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.items.push(item);
                resolve(item);
            }, 1000);
        });
    }

    async actualizar(item: T): Promise<T> {
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

    async eliminar(id: number): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.items = this.items.filter(item => item.id !== id);
                resolve();
            }, 1000);
        });
    }
}
