import { Product } from 'src/controllers/entities/product.entity';
export declare class ProductsService {
    private counterId;
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(newProducto: any): any;
    update(id: number, payload: any): string;
}
