import { GenericDAO } from './dao';
import { Pelicula } from './peliculas';

export interface PeliculaDAO extends GenericDAO<Pelicula> {
  buscarPorNombre(nombre: string): Promise<Pelicula | null>;
}
