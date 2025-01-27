import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/controllers/entities/product.entity';

@Injectable() // Anotación inyectable --> Inyección de dependencias
export class ProductsService { 
    private counterId = 1; 
    private products: Product[] = [ 
        { id: 1, 
            name: 'Producto 1', 
            description: 'lorem lorem', 
            price: 10000, stock: 300, 
            image: 'https://i.imgur.com/U4iGx1j.jpeg', 
        }, 
    ];

    findAll() {
        return this.products;
    }

    // findOne(id:number) {
    //     return this.products.find((product) => product.id === id);
    // }

    findOne(id:number){
        const product = this.products.find((item) => item.id === id);
            if(!product){
                      const id = 42;
                      const message = `${id} not found`;
                      console.log(message); // Salida: "42 not found"
                      throw new NotFoundException(`Product ${id} not found`);
      }
        return product;
        // return this.products.find(product => product.id === id);
    }

    create(newProducto: any) {
        this.counterId += 1;
        const newProduct = {
            id: this.counterId,
            ...newProducto,
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: any) {
        const productFound = this.findOne(id);
        let message = '';
        if (productFound != null) {
            const index = this.products.findIndex((item) => item.id === id);
          // Hacer un merge entre los dos
          // Haz esta prueba si te da tiempo
            // this.products[index] = payload;
          this.products[index] = {
                ...productFound,
                ...payload,
          }
          message = 'Product updated';
        } else {
          message = 'Product not found';
        }
        return message;
      }

}
