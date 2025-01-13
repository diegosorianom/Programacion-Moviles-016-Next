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
exports.CancionesController = void 0;
const common_1 = require("@nestjs/common");
let CancionesController = class CancionesController {
    getCancion(cancionId) {
        return `lista canciones`;
    }
    getCancionId(id) {
        return `id de la cancion: ${id}`;
    }
    getCancionName(title) {
        return `nombre de la cancion: ${title}`;
    }
    deleteCancionId(id) {
        return `cancion eliminada: ${id}`;
    }
    putCancionId(id) {
        return `cancion añadida: ${id}`;
    }
    postCategoryId(category) {
        return `categoria añadida: ${category}`;
    }
};
exports.CancionesController = CancionesController;
__decorate([
    (0, common_1.Get)('/canciones'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "getCancion", null);
__decorate([
    (0, common_1.Get)('/canciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "getCancionId", null);
__decorate([
    (0, common_1.Get)('/canciones?title=ramona'),
    __param(0, (0, common_1.Param)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "getCancionName", null);
__decorate([
    (0, common_1.Delete)('/canciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "deleteCancionId", null);
__decorate([
    (0, common_1.Put)('/canciones/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "putCancionId", null);
__decorate([
    (0, common_1.Post)('/canciones/title/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CancionesController.prototype, "postCategoryId", null);
exports.CancionesController = CancionesController = __decorate([
    (0, common_1.Controller)('canciones')
], CancionesController);
//# sourceMappingURL=canciones.controller.js.map