import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService:ProductsService){}

  @Get('products')
  getProducts(){
    return this.productService.findAll();
  }

  // Parámetros Path Params
  @Get(':productId')
  // getProduct(@Param('productId') productId: number){
  getProduct(@Param('productId', ParseIntPipe) productId: number){
    // http://localhost:3000/products/1  
    // return `product ${productId}`;
    return this.productService.findOne(+productId);
  }

  // Parámetros por Query
  @Get('')
  getProductsQuery(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }

  // Parametros para Body
  // http://localhost:3000/products/
  // @Post()
  //   create(@Body() payload: any) {
  //     // let data = payload.price;
  //     // return {
  //     //   message: 'acción de crear',
  //     //   payload:payload.name
  //     // };
  // }

  @Post()
  create(@Body() newProducto: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productService.create(newProducto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }
}
