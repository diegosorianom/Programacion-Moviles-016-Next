"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasController = void 0;
const common_1 = require("@nestjs/common");
const peliculas_service_1 = require("../../services/peliculas/peliculas.service");
let PeliculasController = class PeliculasController {
    constructor(peliculasService) {
        this.peliculasService = peliculasService;
    }
    async obtenerTodas() {
        return this.peliculasService.obtenerTodas();
    }
    async obtenerPorId(id) {
        return this.peliculasService.obtenerPorId(Number(id));
    }
    async crear(pelicula) {
        return this.peliculasService.crear(pelicula);
    }
    async actualizar(id, data) {
        return this.peliculasService.actualizar(Number(id), data);
    }
    async eliminar(id) {
        return this.peliculasService.eliminar(Number(id));
    }
    async buscarPorNombre(nombre) {
        return this.peliculasService.buscarPorNombre(nombre);
    }
};
exports.PeliculasController = PeliculasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "obtenerTodas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "obtenerPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)('buscar/nombre'),
    __param(0, (0, common_1.Query)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeliculasController.prototype, "buscarPorNombre", null);
exports.PeliculasController = PeliculasController = __decorate([
    (0, common_1.Controller)('peliculas'),
    __metadata("design:paramtypes", [peliculas_service_1.PeliculasService])
], PeliculasController);
//# sourceMappingURL=peliculas.controller.js.map