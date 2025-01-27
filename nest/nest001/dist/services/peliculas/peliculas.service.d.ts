import { Pelicula } from 'src/typescript/peliculas';
export declare class PeliculasService {
    private peliculasDAO;
    obtenerTodas(): Promise<Pelicula[]>;
    obtenerPorId(id: number): Promise<Pelicula | null>;
    crear(pelicula: Pelicula): Promise<Pelicula>;
    actualizar(id: number, data: Partial<Pelicula>): Promise<Pelicula | null>;
    eliminar(id: number): Promise<void>;
    buscarPorNombre(nombre: string): Promise<Pelicula | null>;
}
