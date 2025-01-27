"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasService = void 0;
const common_1 = require("@nestjs/common");
const pelicula_dao_impl_1 = require("../../typescript/pelicula.dao.impl");
let PeliculasService = class PeliculasService {
    constructor() {
        this.peliculasDAO = new pelicula_dao_impl_1.PeliculasDAOImpl();
    }
    async obtenerTodas() {
        return this.peliculasDAO.obtenerTodos();
    }
    async obtenerPorId(id) {
        return this.peliculasDAO.obtenerPorId(id);
    }
    async crear(pelicula) {
        return this.peliculasDAO.crear(pelicula);
    }
    async actualizar(id, data) {
        const peliculaExistente = await this.peliculasDAO.obtenerPorId(id);
        if (!peliculaExistente) {
            return null;
        }
        const peliculaActualizada = {
            ...peliculaExistente,
            ...data,
        };
        return this.peliculasDAO.actualizar(peliculaActualizada);
    }
    async eliminar(id) {
        await this.peliculasDAO.eliminar(id);
    }
    async buscarPorNombre(nombre) {
        return this.peliculasDAO.buscarPorNombre(nombre);
    }
};
exports.PeliculasService = PeliculasService;
exports.PeliculasService = PeliculasService = __decorate([
    (0, common_1.Injectable)()
], PeliculasService);
//# sourceMappingURL=peliculas.service.js.map