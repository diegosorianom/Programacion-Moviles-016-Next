"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const categories_controller_1 = require("./controllers/categories/categories.controller");
const products_controller_1 = require("./controllers/products/products.controller");
const brands_controller_1 = require("./controllers/brands/brands.controller");
const canciones_controller_1 = require("./controllers/canciones/canciones.controller");
const products_service_1 = require("./services/products/products.service");
const peliculas_service_1 = require("./services/peliculas/peliculas.service");
const peliculas_controller_1 = require("./controllers/peliculas/peliculas.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, categories_controller_1.CategoriesController, products_controller_1.ProductsController, brands_controller_1.BrandsController, canciones_controller_1.CancionesController, peliculas_controller_1.PeliculasController],
        providers: [app_service_1.AppService, products_service_1.ProductsService, peliculas_service_1.PeliculasService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map