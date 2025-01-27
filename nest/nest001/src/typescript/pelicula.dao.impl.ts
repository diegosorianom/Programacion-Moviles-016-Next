import { PeliculaDAO } from "./pelicula.dao";
import { Pelicula } from "./peliculas";

export class PeliculasDAOImpl implements PeliculaDAO {
    private peliculas: Pelicula[] = [
        { id: 1, nombre: "La Reina del Sur" },
        { id: 2, nombre: "El Padrino" }
    ];

    async obtenerTodos(): Promise<Pelicula[]> {
        return Promise.resolve(this.peliculas);
    }

    async obtenerPorId(id: number): Promise<Pelicula | null> {
        const pelicula = this.peliculas.find(p => p.id === id) || null;
        return Promise.resolve(pelicula);
    }

    async crear(pelicula: Pelicula): Promise<Pelicula> {
        this.peliculas.push(pelicula);
        return Promise.resolve(pelicula);
    }

    async actualizar(pelicula: Pelicula): Promise<Pelicula> {
        const index = this.peliculas.findIndex(p => p.id === pelicula.id);
        if (index !== -1) {
            this.peliculas[index] = pelicula;
        }
        return Promise.resolve(pelicula);
    }

    async eliminar(id: number): Promise<void> {
        this.peliculas = this.peliculas.filter(p => p.id !== id);
        return Promise.resolve();
    }

    buscarPorNombre(nombre: string): Promise<Pelicula | null> {
        const pelicula = this.peliculas.find(p => p.nombre.toLowerCase() === nombre.toLowerCase()) || null;
        return Promise.resolve(pelicula);
    }
}
