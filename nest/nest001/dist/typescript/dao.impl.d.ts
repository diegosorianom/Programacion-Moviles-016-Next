import { GenericDAO } from "./dao";
export declare class GenericDAOImpl<T extends {
    id: number;
}> implements GenericDAO<T> {
    private items;
    obtenerTodos(): Promise<T[]>;
    obtenerPorId(id: number): Promise<T | null>;
    crear(item: T): Promise<T>;
    actualizar(item: T): Promise<T>;
    eliminar(id: number): Promise<void>;
}
