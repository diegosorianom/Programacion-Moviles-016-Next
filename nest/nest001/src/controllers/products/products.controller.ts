import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  /*@Get(':productId')
  getProduct1(@Param() { productId }) {
    return `product ${productId}`;
  }*/

  @Get('')
  getProducts2(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }

  @Post()
  create(@Body() payload: any) {
    let data = payload.price;
    return {
      message: 'acción de crear',
      payload:payload.name,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }
}

//http://localhost:3000/products/1