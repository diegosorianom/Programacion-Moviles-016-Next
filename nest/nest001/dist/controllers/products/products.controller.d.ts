import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products/products.service';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    getProducts(): import("../entities/product.entity").Product[];
    getProduct(productId: number): import("../entities/product.entity").Product;
    getProductsQuery(limit: number, offset: number, brand: string): string;
    create(newProducto: CreateProductDto): any;
    update(id: number, payload: UpdateProductDto): string;
}
