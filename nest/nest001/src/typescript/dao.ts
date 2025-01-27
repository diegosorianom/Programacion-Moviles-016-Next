export interface GenericDAO<T> {
    obtenerTodos(): Promise<T[]>;
    obtenerPorId(id: number): Promise<T | null>;
    crear(item: T): Promise<T>;
    actualizar(item: T): Promise<T>;
    eliminar(id: number): Promise<void>;
}
