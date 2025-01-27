import { Injectable } from '@nestjs/common';
import { PeliculasDAOImpl } from 'src/typescript/pelicula.dao.impl';
import { Pelicula } from 'src/typescript/peliculas';

@Injectable()
export class PeliculasService {
  private peliculasDAO = new PeliculasDAOImpl(); // Instancia del DAO

  async obtenerTodas(): Promise<Pelicula[]> {
    return this.peliculasDAO.obtenerTodos();
  }

  async obtenerPorId(id: number): Promise<Pelicula | null> {
    return this.peliculasDAO.obtenerPorId(id);
  }

  async crear(pelicula: Pelicula): Promise<Pelicula> {
    return this.peliculasDAO.crear(pelicula);
  }

  async actualizar(id: number, data: Partial<Pelicula>): Promise<Pelicula | null> {
    const peliculaExistente = await this.peliculasDAO.obtenerPorId(id);
    if (!peliculaExistente) {
      return null; // Si no existe, devuelve null
    }
    const peliculaActualizada = {
      ...peliculaExistente,
      ...data,
    };
    return this.peliculasDAO.actualizar(peliculaActualizada);
  }

  async eliminar(id: number): Promise<void> {
    await this.peliculasDAO.eliminar(id);
  }

  async buscarPorNombre(nombre: string): Promise<Pelicula | null> {
    return this.peliculasDAO.buscarPorNombre(nombre);
  }
}
