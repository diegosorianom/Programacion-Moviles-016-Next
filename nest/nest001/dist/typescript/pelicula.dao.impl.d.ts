import { PeliculaDAO } from "./pelicula.dao";
import { Pelicula } from "./peliculas";
export declare class PeliculasDAOImpl implements PeliculaDAO {
    private peliculas;
    obtenerTodos(): Promise<Pelicula[]>;
    obtenerPorId(id: number): Promise<Pelicula | null>;
    crear(pelicula: Pelicula): Promise<Pelicula>;
    actualizar(pelicula: Pelicula): Promise<Pelicula>;
    eliminar(id: number): Promise<void>;
    buscarPorNombre(nombre: string): Promise<Pelicula | null>;
}
