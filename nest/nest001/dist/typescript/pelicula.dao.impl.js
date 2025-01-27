"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasDAOImpl = void 0;
class PeliculasDAOImpl {
    constructor() {
        this.peliculas = [
            { id: 1, nombre: "La Reina del Sur" },
            { id: 2, nombre: "El Padrino" }
        ];
    }
    async obtenerTodos() {
        return Promise.resolve(this.peliculas);
    }
    async obtenerPorId(id) {
        const pelicula = this.peliculas.find(p => p.id === id) || null;
        return Promise.resolve(pelicula);
    }
    async crear(pelicula) {
        this.peliculas.push(pelicula);
        return Promise.resolve(pelicula);
    }
    async actualizar(pelicula) {
        const index = this.peliculas.findIndex(p => p.id === pelicula.id);
        if (index !== -1) {
            this.peliculas[index] = pelicula;
        }
        return Promise.resolve(pelicula);
    }
    async eliminar(id) {
        this.peliculas = this.peliculas.filter(p => p.id !== id);
        return Promise.resolve();
    }
    buscarPorNombre(nombre) {
        const pelicula = this.peliculas.find(p => p.nombre.toLowerCase() === nombre.toLowerCase()) || null;
        return Promise.resolve(pelicula);
    }
}
exports.PeliculasDAOImpl = PeliculasDAOImpl;
//# sourceMappingURL=pelicula.dao.impl.js.map