import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  // Inyección de dependencia --> Gestiona automaticamente la instancia
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new-point') //endpoint
  getNewEndPoint(): string {
    return "new endpoint";
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param() { categoryId, productId }) {
    // @Param('productId') productId: string
    return `Product ${productId}, Category ${categoryId}`;
  }

  @Get('products')
    getProducts(
      @Query('limit') limit = 100,
      @Query('offset') offset = 0,
      @Query('brand') brand: string,
    ) {
      return `products limit=> ${limit}`;
  }
  // http://localhost:3000/products?limit=100&offset=0&brand=tuMarca


}
