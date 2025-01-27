import { PeliculasService } from 'src/services/peliculas/peliculas.service';
import { Pelicula } from 'src/typescript/peliculas';
export declare class PeliculasController {
    private readonly peliculasService;
    constructor(peliculasService: PeliculasService);
    obtenerTodas(): Promise<Pelicula[]>;
    obtenerPorId(id: string): Promise<Pelicula>;
    crear(pelicula: Pelicula): Promise<Pelicula>;
    actualizar(id: string, data: Partial<Pelicula>): Promise<Pelicula>;
    eliminar(id: string): Promise<void>;
    buscarPorNombre(nombre: string): Promise<Pelicula>;
}
